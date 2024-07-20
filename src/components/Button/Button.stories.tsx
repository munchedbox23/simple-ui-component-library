import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import "../../index.css";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "button",
    label: "Click me",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    type: "button",
    label: "Click me",
    variant: "outline",
    colorscheme: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    type: "button",
    label: "Click me",
    variant: "ghost",
    colorscheme: "secondary",
  },
};
