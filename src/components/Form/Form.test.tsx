import { render, fireEvent, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Form component", () => {
  it("form should render correctly", () => {
    const onSubmit = jest.fn();
    const { getByText } = render(<Form onSubmit={onSubmit} />);
    expect(getByText("Login")).toBeInTheDocument();
    expect(
      getByText("Please enter your credentials to login")
    ).toBeInTheDocument();
    expect(getByText("Username")).toBeInTheDocument();
    expect(getByText("Password")).toBeInTheDocument();
    expect(getByText("Sign in")).toBeInTheDocument();
  });

  it("allows entering data into the form fields", () => {
    const onSubmit = jest.fn((e) => e.preventDefault());
    render(<Form onSubmit={onSubmit} />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    expect(usernameInput).toHaveValue("testuser");
    expect(passwordInput).toHaveValue("testpassword");
  });

  it("calls onSubmit when the form is submitted", () => {
    const onSubmit = jest.fn((e) => e.preventDefault());
    render(<Form onSubmit={onSubmit} />);

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByText("Sign in");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("prevents default form submission behavior", () => {
    const onSubmit = jest.fn((e) => e.preventDefault());
    render(<Form onSubmit={onSubmit} />);

    const submitButton = screen.getByText("Sign in");
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
