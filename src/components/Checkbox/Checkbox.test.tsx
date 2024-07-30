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

  it("applies variant styles", () => {
    const variants = ["default", "primary", "secondary"] as const;
    variants.forEach((variant) => {
      const { container } = render(<Checkbox variant={variant} />);
      const checkbox = container.querySelector('input[type="checkbox"]');
      expect(checkbox).toHaveStyle(
        `background-color: ${variant === "default" ? "#3b82f6" : variant === "primary" ? "#10b981" : "#ef4444"};`
      );
    });
  });

  it("applies size styles", () => {
    const sizes = ["sm", "md", "lg"] as const;
    sizes.forEach((size) => {
      const { container } = render(<Checkbox size={size} />);
      const checkbox = container.querySelector('input[type="checkbox"]');
      expect(checkbox).toHaveStyle(
        `width: ${size === "sm" ? "0.75rem" : size === "md" ? "1rem" : "1.5rem"}; height: ${size === "sm" ? "0.75rem" : size === "md" ? "1rem" : "1.5rem"};`
      );
    });
  });
});
