import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

window.HTMLElement.prototype.scrollIntoView = function() {};

// Mock ResizeObserver
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

import CategorySelector from "@/components/CategorySelector"; // Adjust the path if needed
import { Category } from "@/sanity.types";
import "@testing-library/jest-dom";


// Create a mock for next/navigation's useRouter with a push function
const pushMock = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("CategorySelector Component", () => {
  // Define some sample categories
  const mockCategories: Category[] = [
    { _id: "1", title: "Electronics", slug: {  _type: 'slug', current: "electronics" } },
    { _id: "2", title: "Books", slug: { _type: 'slug', current: "books" } },
    { _id: "3", title: "Clothing", slug: { _type: 'slug', current: "clothing" } },
  ];

  beforeEach(() => {
    pushMock.mockClear();
  });

  test("renders the default button text when no category is selected", () => {
    const { container } = render(<CategorySelector categories={mockCategories} />);
    // Find the element that contains the default text and then get its closest button
    const textElement = screen.getByText(/filter by category/i);
    const button = textElement.closest("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/filter by category/i);
    expect(container).toMatchSnapshot();
  });

  test("updates selection when a category is selected via click", async () => {
    render(<CategorySelector categories={mockCategories} />);
    // Open the popover by clicking the button
    const textElement = screen.getByText(/filter by category/i);
    const button = textElement.closest("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button!);
    
    // Wait for the CommandItem to appear and simulate a click on "Books"
    const commandItem = await screen.findByText("Books");
    fireEvent.click(commandItem);
    
    // Expect router.push to be called with the correct URL for Books
    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/categories/books");
    });
  });

  test("searches for a category and routes when Enter is pressed", async () => {
    render(<CategorySelector categories={mockCategories} />);
    // Open the popover
    const textElement = screen.getByText(/filter by category/i);
    const button = textElement.closest("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button!);
    
    // Find the search input (using its placeholder text)
    const input = screen.getByPlaceholderText("Search By Category.......");
    // Simulate typing and then pressing Enter to search for "Electronics"
    fireEvent.change(input, { target: { value: "elect" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    
    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/categories/electronics");
    });
  });

  test("matches snapshot after opening the popover", async () => {
    const { container } = render(<CategorySelector categories={mockCategories} />);
    const textElement = screen.getByText(/filter by category/i);
    const button = textElement.closest("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button!);
    // Wait for the popover content (search input) to appear
    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search By Category.......")).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });
});
