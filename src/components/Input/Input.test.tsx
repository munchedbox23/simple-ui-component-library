import { render } from "@testing-library/react";
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

  it("input should render password input with show password icon", () => {
    const { getByPlaceholderText, container } = render(
      <Input type="password" placeholder="Enter text" />
    );

    expect(getByPlaceholderText("Enter text")).toHaveAttribute(
      "type",
      "password"
    );
    expect(container.querySelector(".inputIcon")).toBeInTheDocument();
  });
});
