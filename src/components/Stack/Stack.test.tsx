import { render, screen } from "@testing-library/react";
import { Stack, MStack } from "./Stack";

describe("Stack", () => {
  it("renders with default props", () => {
    render(<Stack>Child 1</Stack>);
    expect(screen.getByText("Child 1")).toBeInTheDocument();
  });

  it("renders with custom spacing", () => {
    render(<Stack spacing="md">Child 1</Stack>);
    const stackElement = screen.getByText("Child 1");
    expect(stackElement).toHaveStyle("gap: 1rem;");
  });

  it("renders with custom direction", () => {
    render(<Stack direction="row">Child 1</Stack>);
    const stackElement = screen.getByText("Child 1");
    expect(stackElement).toHaveStyle("flex-direction: row;");
  });

  it("renders with custom align", () => {
    render(<Stack align="center">Child 1</Stack>);
    const stackElement = screen.getByText("Child 1");
    expect(stackElement).toHaveStyle("align-items: center;");
  });

  it("renders with custom justify", () => {
    render(<Stack justify="between">Child 1</Stack>);
    const stackElement = screen.getByText("Child 1");
    expect(stackElement).toHaveStyle("justify-content: space-between;");
  });

  it("renders with custom className", () => {
    render(<Stack className="custom-class">Child 1</Stack>);
    const stackElement = screen.getByText("Child 1");
    expect(stackElement).toHaveClass("custom-class");
  });

  it("renders with multiple children", () => {
    render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>
    );
    expect(screen.getAllByText(/Child [12]/)).toHaveLength(2);
  });

  it("renders with MStack", () => {
    render(<MStack>Child 1</MStack>);
    expect(screen.getByText("Child 1")).toBeInTheDocument();
  });
});
