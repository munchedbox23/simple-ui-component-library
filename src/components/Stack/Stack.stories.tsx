import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    spacing: {
      options: ["none", "sm", "md", "lg", "xl"],
      control: { type: "select" },
      description: "Spacing between children",
    },
    direction: {
      options: ["row", "column"],
      control: { type: "select" },
      description: "Direction of the stack",
    },
    align: {
      options: ["start", "center", "end", "stretch"],
      control: {
        type: "select",
      },
      description: "Alignment of children",
    },
    justify: {
      options: ["start", "center", "end", "between", "around", "evenly"],
      control: {
        type: "select",
      },
      description: "Justification of children",
    },
    children: {
      control: { type: "text" },
      description: "Content inside the stack",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div
          style={{ backgroundColor: "blue", color: "white", padding: "8px" }}
        >
          Item 1
        </div>
        <div
          style={{ backgroundColor: "blue", color: "white", padding: "8px" }}
        >
          Item 2
        </div>
        <div
          style={{ backgroundColor: "blue", color: "white", padding: "8px" }}
        >
          Item 3
        </div>
      </>
    ),
    spacing: "md",
    direction: "column",
    align: "stretch",
    justify: "start",
  },
};

export const RowStack: Story = {
  args: {
    children: (
      <>
        <div
          style={{ backgroundColor: "blue", color: "white", padding: "8px" }}
        >
          Item 1
        </div>
        <div
          style={{ backgroundColor: "blue", color: "white", padding: "8px" }}
        >
          Item 2
        </div>
        <div
          style={{ backgroundColor: "blue", color: "white", padding: "8px" }}
        >
          Item 3
        </div>
      </>
    ),
    spacing: "md",
    direction: "row",
    align: "center",
    justify: "between",
  },
};

export const CenteredStack: Story = {
  args: {
    children: (
      <>
        <div
          style={{ backgroundColor: "blue", color: "white", padding: "8px" }}
        >
          Item 1
        </div>
        <div
          style={{ backgroundColor: "blue", color: "white", padding: "8px" }}
        >
          Item 2
        </div>
        <div
          style={{ backgroundColor: "blue", color: "white", padding: "8px" }}
        >
          Item 3
        </div>
      </>
    ),
    spacing: "lg",
    direction: "column",
    align: "center",
    justify: "center",
  },
};
