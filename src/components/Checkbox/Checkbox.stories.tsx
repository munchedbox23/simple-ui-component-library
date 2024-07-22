import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import "../../index.css";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      type: "string",
      description: "Текст метки",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
      description: "Размер чекбокса",
    },
    variant: {
      options: ["default", "primary", "secondary"],
      control: {
        type: "select",
      },
      description: "Вариант оформления чекбокса",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Check me",
    size: "md",
    variant: "default",
  },
};

export const Small: Story = {
  args: {
    label: "Check me",
    size: "sm",
    variant: "default",
  },
};

export const Large: Story = {
  args: {
    label: "Check me",
    size: "lg",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    label: "Check me",
    size: "md",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Check me",
    size: "md",
    variant: "secondary",
  },
};
