// import '@testing-library/jest-dom'
// import { render, screen } from '@testing-library/react'
// import QuantityOfItems from './components/QuantityOfItems'

// describe('QuantityOfItems', () => {
//   const mockProduct = {
//     _id: '123',
//     name: 'Test Product',
//     price: 100,
//     stock: 10,
//     slug: { current: 'test-product' }
//   }

//   it('renders quantity controls', () => {
//     render(<QuantityOfItems product={mockProduct} />)
    
//     const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })
//     const increaseButton = screen.getByRole('button', { name: /increase quantity/i })
//     const quantityDisplay = screen.getByText('0')

//     expect(decreaseButton).toBeInTheDocument()
//     expect(increaseButton).toBeInTheDocument()
//     expect(quantityDisplay).toBeInTheDocument()
//   })

//   it('renders correct button icons', () => {
//     render(<QuantityOfItems product={mockProduct} />)
    
//     const decreaseButton = screen.getByRole('button', { name: /decrease quantity/i })
//     const increaseButton = screen.getByRole('button', { name: /increase quantity/i })

//     expect(decreaseButton.querySelector('svg')).toBeInTheDocument()
//     expect(increaseButton.querySelector('svg')).toBeInTheDocument()
//   })

//   it('has proper accessibility labels', () => {
//     render(<QuantityOfItems product={mockProduct} />)
    
//     expect(screen.getByLabelText(/decrease quantity/i)).toBeInTheDocument()
//     expect(screen.getByLabelText(/increase quantity/i)).toBeInTheDocument()
//   })
// })


import { render, screen, fireEvent } from "@testing-library/react";
import QuantityOfItems from "@/components/QuantityOfItems"; // Adjust import path if necessary
import useCartStore from "./store";
import toast from "react-hot-toast";
import { Product } from "@/sanity.types";
import "@testing-library/jest-dom";

// Mock the Zustand store
jest.mock("./store", () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock react-hot-toast
jest.mock("react-hot-toast", () => ({
  success: jest.fn(),
}));

// Sample product for testing
const mockProduct: Product = {
  _id: "prod-1",
  name: "Test Product",
  price: 100,
  stock: 10,
  description: "Test Description",
} as Required<Pick<Product, 'name'>> & Product;

describe("QuantityOfItems Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly with the given quantity", () => {
    // Mock store to return a specific quantity
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      addItem: jest.fn(),
      removeItem: jest.fn(),
      getItemCount: jest.fn(() => 3),
    });

    render(<QuantityOfItems product={mockProduct} />);

    // Ensure the displayed quantity is correct
    expect(screen.getByText("3")).toBeInTheDocument();
    // Check that both increase and decrease buttons are rendered
    expect(screen.getByRole("button", { name: /Decrease Quantity/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Increase Quantity/i })).toBeInTheDocument();
  });

  test("calls removeItem and shows 'Quantity Decreased' toast when quantity is greater than 1", () => {
    const mockRemoveItem = jest.fn();
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      addItem: jest.fn(),
      removeItem: mockRemoveItem,
      getItemCount: jest.fn(() => 2), // More than 1 item
    });

    render(<QuantityOfItems product={mockProduct} />);

    const decreaseButton = screen.getByRole("button", { name: /Decrease Quantity/i });
    fireEvent.click(decreaseButton);

    // Ensure removeItem is called with the product ID
    expect(mockRemoveItem).toHaveBeenCalledWith(mockProduct._id);
    // Toast should show "Quantity Decreased"
    expect(toast.success).toHaveBeenCalledWith("Quantity Decreased");
  });

  test("calls removeItem and shows removed message when quantity is 1 or less", () => {
    const mockRemoveItem = jest.fn();
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      addItem: jest.fn(),
      removeItem: mockRemoveItem,
      getItemCount: jest.fn(() => 1), // 1 item or less
    });

    render(<QuantityOfItems product={mockProduct} />);

    const decreaseButton = screen.getByRole("button", { name: /Decrease Quantity/i });
    fireEvent.click(decreaseButton);

    expect(mockRemoveItem).toHaveBeenCalledWith(mockProduct._id);

    // Toast should show a message with product name substring and removed text
    const expectedMessage = `${(mockProduct.name ?? "Product").substring(0, 12)}....removed successfully`;
    expect(toast.success).toHaveBeenCalledWith(expectedMessage);
  });

  test("calls addItem and shows 'Quantity Increased' toast when increase button is clicked", () => {
    const mockAddItem = jest.fn();
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      addItem: mockAddItem,
      removeItem: jest.fn(),
      getItemCount: jest.fn(() => 1),
    });

    render(<QuantityOfItems product={mockProduct} />);

    const increaseButton = screen.getByRole("button", { name: /Increase Quantity/i });
    fireEvent.click(increaseButton);

    // Ensure addItem is called with the product object
    expect(mockAddItem).toHaveBeenCalledWith(mockProduct);
    // Toast should show "Quantity Increased"
    expect(toast.success).toHaveBeenCalledWith("Quantity Increased");
  });
  test("matches snapshot", () => {
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      addItem: jest.fn(),
      removeItem: jest.fn(),
      getItemCount: jest.fn(() => 5),
    });

    const { container } = render(<QuantityOfItems product={mockProduct} />);
    expect(container).toMatchSnapshot();
  });
});
