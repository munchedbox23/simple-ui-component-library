import type { Meta, StoryObj } from "@storybook/react";
import { SelectBar } from "./Select";
import "../../index.css";

const meta: Meta<typeof SelectBar> = {
  title: "Components/SelectBar",
  component: SelectBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "string",
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
      description: "Размер селекта",
    },
    variant: {
      options: ["default", "primary", "secondary"],
      control: {
        type: "select",
      },
      description: "Вариант оформления селекта",
    },
    options: {
      control: {
        type: "object",
      },
      description: "Опции для выбора",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    size: "md",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    size: "md",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    size: "md",
    variant: "secondary",
  },
};
