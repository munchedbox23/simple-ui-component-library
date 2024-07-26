import { render, fireEvent, screen } from "@testing-library/react";
import CustomSelect from "./Select";
import "@testing-library/jest-dom";

describe("Custom select", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const label = "Select an option";
  const onChange = jest.fn();
  const value: string[] = [];

  it("renders with default props", () => {
    const { getByLabelText } = render(
      <CustomSelect
        options={options}
        label={label}
        onChange={onChange}
        value={value}
      />
    );
    expect(getByLabelText("Select an option")).toBeInTheDocument();
  });

  it("calls onChange with the selected values", () => {
    render(
      <CustomSelect
        options={options}
        label={label}
        onChange={onChange}
        value={value}
      />
    );

    fireEvent.mouseDown(screen.getByLabelText(label));
    fireEvent.click(screen.getByText("Option 1"));
    expect(onChange).toHaveBeenCalledWith(["Option 1"]);
  });

  it("renders options list when clicked", () => {
    render(
      <CustomSelect
        options={options}
        label={label}
        onChange={onChange}
        value={value}
      />
    );

    fireEvent.mouseDown(screen.getByLabelText(label));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("renders each option in the list", () => {
    render(
      <CustomSelect
        options={options}
        label={label}
        onChange={onChange}
        value={value}
      />
    );

    fireEvent.mouseDown(screen.getByLabelText(label));
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });
});
