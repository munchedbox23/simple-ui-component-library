import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames";
import { motion } from "framer-motion";

type TButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    label: string;
    size: "sm" | "md" | "lg";
    type: "button" | "submit" | "reset";
    variant: "primary" | "secondary" | "ghost";
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
        primary: "",
        secondary: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    compoundVariants: [
      { variant: "primary", className: "bg-primary-500 text-white" },

      {
        variant: "secondary",
        className: "text-primary-500 border-primary-500 bg-white",
      },
      {
        variant: "ghost",
        className: "text-sky-500 bg-white",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export const Button = forwardRef<HTMLButtonElement, TButtonProps>(
  ({ label, type = "button", variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, className }))}
        type={type}
        {...props}
      >
        {label}
      </button>
    );
  }
);

export const MButton = motion(Button);
