import React, { forwardRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

type StackProps = {
  children: React.ReactNode;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  direction?: "row" | "column";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
} & React.HTMLAttributes<HTMLDivElement>;

const spacingStyles = {
  none: "",
  sm: "gap: 0.5rem;",
  md: "gap: 1rem;",
  lg: "gap: 1.5rem;",
  xl: "gap: 2rem;",
};

const directionStyles = {
  row: "flex-direction: row;",
  column: "flex-direction: column;",
};

const alignStyles = {
  start: "align-items: flex-start;",
  center: "align-items: center;",
  end: "align-items: flex-end;",
  stretch: "align-items: stretch;",
};

const justifyStyles = {
  start: "justify-content: flex-start;",
  center: "justify-content: center;",
  end: "justify-content: flex-end;",
  between: "justify-content: space-between;",
  around: "justify-content: space-around;",
  evenly: "justify-content: space-evenly;",
};

const StyledStack = styled.div<StackProps>`
  display: flex;
  ${({ spacing = "none" }) => spacingStyles[spacing]}
  ${({ direction = "column" }) => directionStyles[direction]}
  ${({ align = "stretch" }) => alignStyles[align]}
  ${({ justify = "start" }) => justifyStyles[justify]}
`;

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    { children, spacing, direction, align, justify, className, ...otherProps },
    ref
  ) => {
    return (
      <StyledStack
        ref={ref}
        spacing={spacing}
        direction={direction}
        align={align}
        justify={justify}
        className={className}
        {...otherProps}
      >
        {children}
      </StyledStack>
    );
  }
);

export const MStack = motion(Stack);
