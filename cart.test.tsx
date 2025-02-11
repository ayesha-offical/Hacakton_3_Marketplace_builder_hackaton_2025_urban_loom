import { render, screen, waitFor } from "@testing-library/react";
import Cart from "@/components/cart";
import useCartStore from "./store";
import "@testing-library/jest-dom";

jest.mock("./store", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const setFakeStore = (groupedItems: any[]) => {
  (useCartStore as unknown as jest.Mock).mockImplementation((selector) =>
    selector({ getGroupedItems: () => groupedItems })
  );
};

describe("Cart Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly with 0 items when groupedItems returns empty array", async () => {
    setFakeStore([]);
    const { container } = render(<Cart />);
    
    await waitFor(() => {
      expect(screen.getByText(/cart/i)).toBeInTheDocument();
    });
    
    // Updated to check for separate elements
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("items")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("renders correctly with correct item count when groupedItems returns items", async () => {
    setFakeStore([{ id: 1 }, { id: 2 }, { id: 3 }]);
    const { container } = render(<Cart />);
    
    await waitFor(() => {
      expect(screen.getByText(/cart/i)).toBeInTheDocument();
    });
    
    // Updated to check for separate elements
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("items")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("renders the link with correct href attribute", async () => {
    setFakeStore([]);
    render(<Cart />);
    
    await waitFor(() => {
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/cart");
    });
  });
});