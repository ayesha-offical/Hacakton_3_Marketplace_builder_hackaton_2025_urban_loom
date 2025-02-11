import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./components/header"; // Adjust path if necessary
import { currentUser } from "@clerk/nextjs/server";
import "@testing-library/jest-dom";

// --- Mocks ---

// Mock next/image to simply render an <img>
jest.mock("next/image", () => (props: any) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...props} />;
});

// Mock next/form to render a plain <form>
jest.mock("next/form", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <form>{children}</form>,
}));

// Mock Container to render its children
jest.mock("./components/container", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock Cart component as a simple stub with a test id
jest.mock("./components/cart", () => () => <div data-testid="cart">Cart</div>);

// Mock Clerk components from @clerk/nextjs
jest.mock("@clerk/nextjs", () => ({
  ClerkLoaded: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SignedIn: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SignInButton: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  UserButton: () => <div>UserButton</div>,
}));

// Mock currentUser from @clerk/nextjs/server
jest.mock("@clerk/nextjs/server", () => ({
  currentUser: jest.fn(),
}));

// --- Tests ---

describe("Header Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders header with signed in user", async () => {
    // Simulate a signed in user
    (currentUser as jest.Mock).mockResolvedValue({ fullName: "John Doe" });
    
    // Await the async Header component
    const HeaderComponent = await Header();
    render(HeaderComponent);
    
    // Wait for the user name to appear
    expect(await screen.findByText("John Doe")).toBeInTheDocument();
    expect(screen.getByTestId("cart")).toBeInTheDocument();
    // Verify that the orders link is present
    expect(screen.getByRole("link", { name: /orders/i })).toBeInTheDocument();
    
    // Snapshot test
    expect(document.body).toMatchSnapshot();
  });

  test("renders header with no user (shows SignInButton)", async () => {
    // Simulate no signed in user
    (currentUser as jest.Mock).mockResolvedValue(null);
    
    // Await the async Header component
    const HeaderComponent = await Header();
    render(HeaderComponent);
    
    // Wait for the SignInButton branch to show text "Login"
    expect(await screen.findByText("Login")).toBeInTheDocument();
    expect(screen.getByTestId("cart")).toBeInTheDocument();
    
    // Snapshot test
    expect(document.body).toMatchSnapshot();
  });
});
