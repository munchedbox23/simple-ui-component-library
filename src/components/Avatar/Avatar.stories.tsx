import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import "../../index.css";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "string",
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
      description: "Размер аватара",
    },
    square: {
      control: {
        type: "boolean",
      },
      description: "Квадратная форма аватара",
    },
    noBorder: {
      control: {
        type: "boolean",
      },
      description: "Отсутствие границы у аватара",
    },
    src: {
      control: {
        type: "text",
      },
      description: "URL изображения аватара",
    },
    alt: {
      control: {
        type: "text",
      },
      description: "Альтернативный текст для изображения аватара",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
<<<<<<< HEAD
    size: "lg",
=======
    size: "md",
>>>>>>> origin/main
    square: false,
    noBorder: false,
    src: "https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395236.jpg?w=740&t=st=1721590681~exp=1721591281~hmac=f146356c07aded7bec3361406767ab53d21239f89a12532e6d903d4794e50d48",
    alt: "Avatar",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    square: false,
    noBorder: false,
    src: "https://mir-cdn.behance.net/v1/rendition/project_modules/max_3840/1285eb171058963.64684abf424f8.png",
    alt: "Avatar",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    square: false,
    noBorder: false,
    src: "https://mir-cdn.behance.net/v1/rendition/project_modules/max_3840/1285eb171058963.64684abf424f8.png",
    alt: "Avatar",
  },
};

export const Square: Story = {
  args: {
    size: "md",
    square: true,
    noBorder: false,
    src: "https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395236.jpg?w=740&t=st=1721590681~exp=1721591281~hmac=f146356c07aded7bec3361406767ab53d21239f89a12532e6d903d4794e50d48",
    alt: "Avatar",
  },
};

export const NoBorder: Story = {
  args: {
    size: "md",
    square: false,
    noBorder: true,
    src: "https://mir-cdn.behance.net/v1/rendition/project_modules/max_3840/1285eb171058963.64684abf424f8.png",
    alt: "Avatar",
  },
};
