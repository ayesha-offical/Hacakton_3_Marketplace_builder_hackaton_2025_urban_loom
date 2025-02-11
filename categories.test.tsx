import { render, screen } from "@testing-library/react";
import Categories from "./components/categories";
import { Category } from "@/sanity.types";
import "@testing-library/jest-dom";

// Update mock categories to match Sanity schema
const mockCategories: Category[] = [
  { 
    _id: "1", 
    title: "Category 1", // Changed from name to title
    slug: { _type: "slug", current: "category-1" },
    description: "Test category 1", // Added description
    image: { // Added image object
      _type: "image",
      asset: {
        _ref: "image-123",
        _type: "reference"
      }
    },
    _type: "category",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
    _rev: "some-rev-1"
  },
  { 
    _id: "2", 
    title: "Category 2", // Changed from name to title
    slug: { _type: "slug", current: "category-2" },
    description: "Test category 2", // Added description
    image: { // Added image object
      _type: "image",
      asset: {
        _ref: "image-456",
        _type: "reference"
      }
    },
    _type: "category",
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
    _rev: "some-rev-2"
  }
];

// Update mock CategorySelector to use title instead of name
jest.mock("./components/CategorySelector", () => {
  return function MockCategorySelector({ categories }: { categories: Category[] }) {
    return (
      <div data-testid="category-selector">
        {categories.map((category) => (
          <div key={category._id} data-testid="category-item">
            {category.title} {/* Changed from name to title */}
          </div>
        ))}
      </div>
    );
  };
});

describe("Categories Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders CategorySelector with provided categories", () => {
    render(<Categories categories={mockCategories} />);
    
    const categorySelector = screen.getByTestId("category-selector");
    expect(categorySelector).toBeInTheDocument();

    const categoryItems = screen.getAllByTestId("category-item");
    expect(categoryItems).toHaveLength(2);
    expect(categoryItems[0]).toHaveTextContent("Category 1");
    expect(categoryItems[1]).toHaveTextContent("Category 2");
  });

  test("handles empty categories array", () => {
    render(<Categories categories={[]} />);
    const categorySelector = screen.getByTestId("category-selector");
    expect(categorySelector).toBeInTheDocument();
    expect(categorySelector.children).toHaveLength(0);
  });
});
