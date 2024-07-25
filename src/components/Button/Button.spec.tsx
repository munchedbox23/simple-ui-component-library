import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  it("button should render correctly", () => {
    render(
      <Button type="button" size="md" variant="primary" label="Click me" />
    );
    expect(screen.getByText(/Click me/)).toBeInTheDocument();
  });

  test("renders with primary variant", () => {
    render(
      <Button label="Click me" size="md" type="button" variant="primary" />
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveClass("bg-primary-500 text-white");
  });

  test("renders with secondary variant", () => {
    render(
      <Button label="Click me" size="md" type="button" variant="secondary" />
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveClass(
      "text-primary-500 border-primary-500 bg-white"
    );
  });

  test("renders with ghost variant", () => {
    render(<Button label="Click me" size="md" type="button" variant="ghost" />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveClass("text-sky-500 bg-white");
  });

  test("renders with small size", () => {
    render(
      <Button label="Click me" size="sm" type="button" variant="primary" />
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveClass("px-2 py-1 text-sm");
  });

  test("renders with medium size", () => {
    render(
      <Button label="Click me" size="md" type="button" variant="primary" />
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveClass("px-4 py-2 text-base");
  });

  test("renders with large size", () => {
    render(
      <Button label="Click me" size="lg" type="button" variant="primary" />
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveClass("px-6 py-3 text-lg");
  });

  test("renders with submit type", () => {
    render(<Button label="Submit" size="md" type="submit" variant="primary" />);
    const buttonElement = screen.getByText(/Submit/i);
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  test("renders with reset type", () => {
    render(<Button label="Reset" size="md" type="reset" variant="primary" />);
    const buttonElement = screen.getByText(/Reset/i);
    expect(buttonElement).toHaveAttribute("type", "reset");
  });
});
