import { InputBase, InputBaseProps } from "@mui/material";
import { forwardRef, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { motion } from "framer-motion";
import styled from "styled-components";

type TInputProps = InputBaseProps & {
  type: "email" | "text" | "password" | "number" | "date";
  variant?: "rounded" | "rectangular";
};

const InputForm = styled.div`
  position: relative;
  width: max-content;
  height: 2.5rem;
`;

const StyledInput = styled(InputBase)<{ variant: "rounded" | "rectangular" }>`
  && {
    width: 100%;
    outline: none;
    border-radius: ${({ variant }) => (variant === "rounded" ? "0.5rem" : "0")};
    &::before,
    &::after {
      content: none !important;
    }

    input {
      width: 100%;
      border-radius: inherit;
      padding: 5px 15px 5px 15px;
      border: 2px solid #091e4224;
      line-height: 20px;
      outline: none;
      text-overflow: ellipsis;
      background-color: rgb(240, 242, 245);
      font-size: 1rem;
      transition: border 0.6s ease;

      &:focus {
        border-color: #007ac0;
      }
    }
  }
`;

const InputIcon = styled(motion.div)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 100px;
  right: 7px;
  transform: translateY(-50%);
  color: var(--steel-gray---600);
`;

export const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ className, type, variant = "rounded", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
      setShowPassword((show) => !show);
    };

    return (
      <InputForm>
        <StyledInput
          ref={ref}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          className={className}
          variant={variant}
          {...props}
        />
        {type === "password" && (
          <InputIcon
            onClick={handleClickShowPassword}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {showPassword ? (
              <Visibility
                style={{ width: "20px", height: "20px", color: "gray" }}
              />
            ) : (
              <VisibilityOff
                style={{ width: "20px", height: "20px", color: "gray" }}
              />
            )}
          </InputIcon>
        )}
      </InputForm>
    );
  }
);

export const MInput = motion(Input);
