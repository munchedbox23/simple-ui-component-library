import type { Meta, StoryObj } from "@storybook/react";
import CustomSelect from "./Select";

const meta: Meta<typeof CustomSelect> = {
  title: "Components/CustomSelect",
  component: CustomSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: { type: "object" },
      description: "Массив опций для выбора",
    },
    label: {
      control: { type: "text" },
      description: "Текст метки",
    },
    onChange: {
      action: "changed",
      description: "Функция, вызываемая при изменении значения",
    },
    value: {
      control: { type: "object" },
      description: "Текущее выбранное значение",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
      description: "Размер компонента",
    },
    width: {
      control: { type: "number" },
      description: "Ширина компонента",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    label: "Select an option",
    value: [],
    size: "md",
    width: 300,
  },
};
