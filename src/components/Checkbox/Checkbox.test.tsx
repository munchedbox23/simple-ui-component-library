import { screen, render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import "@testing-library/jest-dom";

describe("Checkbox component", () => {
  it("checkbox should render correctly with label", () => {
    const label = "Test label";
    const { getByText } = render(<Checkbox label={label} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  it("checkbox should render without label", () => {
    render(<Checkbox />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
    expect(screen.queryByText("Check me")).toBeNull();
  });

  it("changes checked state on click", () => {
    const { getByLabelText } = render(<Checkbox label="Test label" />);
    const checkbox = getByLabelText("Test label") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it("applies size classes", () => {
    const sizes = ["sm", "md", "lg"];
    sizes.forEach((size) => {
      const { container } = render(<Checkbox size={size} />);
      const checkbox = container.querySelector('input[type="checkbox"]');
      expect(checkbox).toHaveClass(
        `w-${size === "sm" ? 3 : size === "md" ? 4 : 6}`
      );
      expect(checkbox).toHaveClass(
        `h-${size === "sm" ? 3 : size === "md" ? 4 : 6}`
      );
    });
  });

  it("applies variant classes", () => {
    const variants = ["default", "primary", "secondary"] as const;
    variants.forEach((variant) => {
      const { container } = render(<Checkbox variant={variant} />);
      const checkbox = container.querySelector('input[type="checkbox"]');
      expect(checkbox).toHaveClass(
        `checked:bg-${variant === "default" ? "blue" : variant === "primary" ? "green" : "red"}-500`
      );
    });
  });
});
