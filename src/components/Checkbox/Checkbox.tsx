import React, { forwardRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

type TCheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "label" | "size" | "variant"
> & {
  label?: string;
  size?: keyof typeof sizeStyles;
  variant?: "default" | "primary" | "secondary";
};

const sizeStyles = {
  sm: "width: 0.75rem; height: 0.75rem;",
  md: "width: 1rem; height: 1rem;",
  lg: "width: 1.5rem; height: 1.5rem;",
};

const variantStyles = {
  default: "background-color: #3b82f6;",
  primary: "background-color: #10b981;",
  secondary: "background-color: #ef4444;",
};

const StyledCheckbox = styled.input<TCheckboxProps>`
  appearance: none;
  border: 1px solid #d1d5db; // gray-300
  border-radius: 0.25rem;
  outline: none;
  ${({ size = "md" }) => sizeStyles[size]}
  ${({ variant = "default" }) => variantStyles[variant]}
  &:checked {
    ${({ variant = "default" }) => variantStyles[variant]}
  }
`;

const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  margin-left: 0.5rem;
  color: #374151; // gray-700
`;

export const Checkbox = forwardRef<HTMLInputElement, TCheckboxProps>(
  ({ label, size = "md", variant = "default", className, ...props }, ref) => {
    return (
      <StyledLabel>
        <StyledCheckbox
          ref={ref}
          type="checkbox"
          size={size}
          variant={variant}
          className={className}
          {...props}
        />
        {label && <StyledSpan>{label}</StyledSpan>}
      </StyledLabel>
    );
  }
);

export const MCheckbox = motion(Checkbox);
