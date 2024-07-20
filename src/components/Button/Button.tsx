import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames";
import { motion } from "framer-motion";

type TButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    label: string;
    size: "sm" | "md" | "lg";
    type: "button" | "submit" | "reset";
    variant: "solid" | "outline" | "ghost";
    colorscheme: "primary" | "secondary";
  };

const buttonStyles = cva(
  [
    "w-max",
    "rounded-md",
    "text-xl",
    "disabled:cursor-not-allowed",
    "disabled:opacity-60",
    "focus:outline-none",
    "hover:opacity-60",
    "py-1",
    "duration-700 ease-in ",
  ],
  {
    variants: {
      variant: {
        solid: "border-2",
        outline: "",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white",
        secondary: "text-sky-500",
      },
    },
    compoundVariants: [
      { variant: "solid", colorscheme: "primary", className: "bg-primary-500" },
      {
        variant: "solid",
        colorscheme: "secondary",
        className: "bg-transparent border-primary-500 text-primary-500",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
    ],
    defaultVariants: {
      variant: "outline",
      size: "md",
      colorscheme: "primary",
    },
  }
);

export const Button = forwardRef<HTMLButtonElement, TButtonProps>(
  (
    { label, type = "button", variant, size, colorscheme, className, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
        type={type}
        {...props}
      >
        {label}
      </button>
    );
  }
);

export const MButton = motion(Button);
