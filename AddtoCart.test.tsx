import { render, screen, fireEvent } from "@testing-library/react";
import AddtoCart from "@/components/AddtoCart";
import useCartStore from "./store";
import { Product } from "@/sanity.types";
import "@testing-library/jest-dom";
import toast from "react-hot-toast";

// Mock setup remains the same
jest.mock("./store", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    addItem: jest.fn(),
    getItemCount: jest.fn().mockReturnValue(0),
  }))
}));

jest.mock("react-hot-toast", () => ({
  success: jest.fn(),
}));

const mockProduct: Product = {
  _id: "123",
  name: "Test Product",
  price: 100,
  stock: 10,
  description: "Sample product for testing",
  _type: "product",
  _createdAt: new Date().toISOString(),
  _updatedAt: new Date().toISOString(),
  _rev: "revision-1"
};

describe("AddtoCart Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly", () => {
    render(<AddtoCart product={mockProduct} />);
    expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
  });

  test("adds product to cart when button is clicked", () => {
    const mockAddItem = jest.fn();
    (useCartStore as unknown as jest.Mock).mockImplementation(() => ({
      addItem: mockAddItem,
      getItemCount: () => 0,
    }));

    render(<AddtoCart product={mockProduct} />);
    const addToCartButton = screen.getByRole("button", { name: /add to cart/i });

    fireEvent.click(addToCartButton);

    expect(mockAddItem).toHaveBeenCalledWith(mockProduct);
    // Fixed the expected toast message to match exactly
    expect(toast.success).toHaveBeenCalledWith("Test Product....added successfully");
  });

  test("displays quantity when product is already in the cart", () => {
    (useCartStore as unknown as jest.Mock).mockImplementation(() => ({
      addItem: jest.fn(),
      getItemCount: () => 2,
    }));

    render(<AddtoCart product={mockProduct} />);

    expect(screen.getByText(/Quantity/i)).toBeInTheDocument();
    expect(screen.getByText(/Subtotal/i)).toBeInTheDocument();
  });

  test("disables button if product is out of stock", async () => { // Added async
    const outOfStockProduct = { ...mockProduct, stock: 0 };
    (useCartStore as unknown as jest.Mock).mockImplementation(() => ({
      addItem: jest.fn(),
      getItemCount: () => 0,
    }));

    render(<AddtoCart product={outOfStockProduct} />);

    // Changed to getByRole and added proper aria-label matching
    const addToCartButton = screen.getByRole("button", { 
      name: /add to cart/i 
    });
    
    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton).toHaveAttribute('disabled');
  });
});
