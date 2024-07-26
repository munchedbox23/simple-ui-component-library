import { render, screen } from "@testing-library/react";
import { Text } from "./Text";
import "@testing-library/jest-dom";

describe("Text", () => {
  it("renders with default props", () => {
    render(<Text>Default text</Text>);
    expect(screen.getByText("Default text")).toBeInTheDocument();
  });

  it("renders with custom size", () => {
    render(<Text size="lg">Large text</Text>);
    expect(screen.getByText("Large text")).toHaveClass("text-lg");
  });

  it("renders with custom weight", () => {
    render(<Text weight="bold">Bold text</Text>);
    expect(screen.getByText("Bold text")).toHaveClass("font-bold");
  });

  it("renders with custom emphasis", () => {
    render(<Text emphasis="low">Low emphasis text</Text>);
    expect(screen.getByText("Low emphasis text")).toHaveClass(
      "text-gray-600 font-light"
    );
  });

  it("renders with custom align", () => {
    render(<Text align="center">Centered text</Text>);
    expect(screen.getByText("Centered text")).toHaveClass("text-center");
  });

  it("renders with custom italic", () => {
    render(<Text italic={true}>Italic text</Text>);
    expect(screen.getByText("Italic text")).toHaveClass("italic");
  });

  it("renders with custom underline", () => {
    render(<Text underline={true}>Underlined text</Text>);
    expect(screen.getByText("Underlined text")).toHaveClass(
      "underline underline-offset-2"
    );
  });

  it("renders with custom className", () => {
    render(<Text className="custom-class">Custom class text</Text>);
    expect(screen.getByText("Custom class text")).toHaveClass("custom-class");
  });

  it("renders with as prop", () => {
    render(<Text as="h1">Heading text</Text>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("renders with polymorphic component", () => {
    render(<Text as="div">Div text</Text>);
    expect(screen.getByText("Div text")).toBeInTheDocument();
  });
});
