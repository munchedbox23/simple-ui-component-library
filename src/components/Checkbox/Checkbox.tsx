import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames";
import { motion } from "framer-motion";

type TCheckboxProps = ComponentProps<"input"> &
  VariantProps<typeof checkboxStyles> & {
    label?: string;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "primary" | "secondary";
  };

const checkboxStyles = cva(
  [
    "appearance-none",
    "border",
    "border-gray-300",
    "rounded",
    "focus:outline-none",
  ],
  {
    variants: {
      size: {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-6 h-6",
      },
      variant: {
        default: "checked:bg-blue-500",
        primary: "checked:bg-green-500",
        secondary: "checked:bg-red-500",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export const Checkbox = forwardRef<HTMLInputElement, TCheckboxProps>(
  ({ label, size, variant, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center">
        <input
          ref={ref}
          type="checkbox"
          className={cn(checkboxStyles({ size, variant }), className)}
          {...props}
        />
        {label && <span className="ml-2 text-gray-700">{label}</span>}
      </label>
    );
  }
);

export const MCheckbox = motion(Checkbox);
