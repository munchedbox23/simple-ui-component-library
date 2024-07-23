import type { Meta, StoryObj } from "@storybook/react";
import { Hourglass } from "./Hourglass";

const meta: Meta<typeof Hourglass> = {
  title: "Components/Hourglass",
  component: Hourglass,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
      description: "Size of the hourglass",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hourglass>;

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
