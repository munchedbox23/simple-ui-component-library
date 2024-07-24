import { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";

const meta: Meta<typeof Form> = {
  title: "Examples/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submitted" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (e) => {
      e.preventDefault();
      console.log("Form submitted");
    },
  },
};
