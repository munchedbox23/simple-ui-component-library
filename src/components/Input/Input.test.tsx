import { render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";
import "@testing-library/jest-dom";

describe("Input component", () => {
  it("input should render correctly", () => {
    const { getByPlaceholderText } = render(
      <Input type="text" placeholder="Enter text" />
    );
    expect(getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("input should render with correct type", () => {
    const { getByPlaceholderText } = render(
      <Input type="email" placeholder="Enter text" />
    );
    expect(getByPlaceholderText("Enter text")).toHaveAttribute("type", "email");
  });

  it("input should render with correct placeholder", () => {
    const { getByPlaceholderText } = render(
      <Input type="text" placeholder="Enter text" />
    );

    const input = getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("input should handle change event", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input type="text" placeholder="Enter text" onChange={handleChange} />
    );

    const input = getByPlaceholderText("Enter text");
    fireEvent.change(input, { target: { value: "test" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
