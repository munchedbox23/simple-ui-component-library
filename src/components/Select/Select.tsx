import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames";
import { motion } from "framer-motion";

type TSelectBarProps = ComponentProps<"select"> &
  VariantProps<typeof selectBarStyles> & {
    options: { label: string; value: string }[];
    size?: "sm" | "md" | "lg";
    variant?: "default" | "primary" | "secondary";
  };

const selectBarStyles = cva(
  "w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      variant: {
        default: "bg-white text-black border border-gray-300",
        primary: "bg-blue-500 text-white border border-blue-500",
        secondary: "bg-gray-500 text-white border border-gray-500",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);
export const SelectBar = forwardRef<HTMLSelectElement, TSelectBarProps>(
  ({ options, size, variant, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(selectBarStyles({ size, variant }), className)}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

export const MSelectBar = motion(SelectBar);
