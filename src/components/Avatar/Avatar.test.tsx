import { screen, render } from "@testing-library/react";
import { Avatar } from "./Avatar";
import "@testing-library/jest-dom";

const src = "https://example.com/avatar.jpg";

describe("Avatar component", () => {
  // Image Rendering Test
  it("avatar should render correctly with image", () => {
    const { getByAltText } = render(
      <Avatar src={src} alt="Avatar" size="md" />
    );
    const imageElement = getByAltText("Avatar");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", src);
  });

  // Test for rendering without an image
  it("avatar should render without image", () => {
    render(<Avatar size="md">Fallback Content</Avatar>);
    const fallbackContent = screen.getByText("Fallback Content");
    expect(fallbackContent).toBeInTheDocument();
  });

  // Size test
  it("renders with small size", () => {
    render(<Avatar size="sm" src={src} />);
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toHaveStyle("height: 2rem; width: 2rem;");
  });

  it("renders with medium size", () => {
    render(<Avatar size="md" />);
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toHaveStyle("height: 3rem; width: 3rem;");
  });

  it("renders with large size", () => {
    render(<Avatar size="lg" />);
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toHaveStyle("height: 4rem; width: 4rem;");
  });

  // Shape test (square/circle)
  it("renders with square shape", () => {
    render(<Avatar size="md" square />);
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toHaveStyle("border-radius: 0;");
  });

  it("renders with circular shape", () => {
    render(<Avatar size="md" />);
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toHaveStyle("border-radius: 9999px;");
  });

  // A test for the presence/absence of a border
  it("renders with border", () => {
    render(<Avatar size="md" />);
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toHaveStyle("border: 2px solid #007ac0;");
  });

  it("renders without border", () => {
    render(<Avatar size="md" noBorder />);
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toHaveStyle("border: 0;");
  });
});
