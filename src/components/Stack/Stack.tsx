import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";
import cn from "classnames";
import { motion } from "framer-motion";

type StackProps = {
  children: React.ReactNode;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  direction?: "row" | "column";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
} & React.HTMLAttributes<HTMLDivElement>;

const stackStyles = cva("flex", {
  variants: {
    spacing: {
      none: "",
      sm: "space-y-2",
      md: "space-y-4",
      lg: "space-y-6",
      xl: "space-y-8",
    },
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    spacing: "none",
    direction: "column",
    align: "stretch",
    justify: "start",
  },
});

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    { children, spacing, direction, align, justify, className, ...otherProps },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          stackStyles({ spacing, direction, align, justify }),
          className
        )}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
);

export const MStack = motion(Stack);
