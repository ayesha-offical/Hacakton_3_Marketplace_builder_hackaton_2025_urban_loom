import { render, screen, fireEvent } from "@testing-library/react";
import ProductCartBar from "@/components/ProductCartBar"; // Adjust import path if necessary
import toast from "react-hot-toast";
import "@testing-library/jest-dom";

// Mock react-hot-toast to track toast.success calls
jest.mock("react-hot-toast", () => ({
  success: jest.fn(),
}));

describe("ProductCartBar Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly and matches snapshot", () => {
    const { container } = render(<ProductCartBar />);
    
    // Check if the button with aria-label "Add to Wishlist" is rendered
    expect(screen.getByRole("button", { name: /add to wishlist/i })).toBeInTheDocument();
    
    // Snapshot test to verify the rendered output
    expect(container).toMatchSnapshot();
  });

  test("calls toast.success when the 'Add to Wishlist' button is clicked", () => {
    render(<ProductCartBar />);
    
    const button = screen.getByRole("button", { name: /add to wishlist/i });
    fireEvent.click(button);
    
    // Ensure toast.success is called with the expected message
    expect(toast.success).toHaveBeenCalledWith("Added In Wish List");
  });
});
