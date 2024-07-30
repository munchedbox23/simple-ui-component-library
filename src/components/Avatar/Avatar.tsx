import { forwardRef, ComponentProps, PropsWithChildren } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

type TAvatarProps = ComponentProps<"div"> & {
  alt?: string;
  noBorder?: boolean;
  size: "sm" | "md" | "lg";
  square?: boolean;
  src?: string;
};

const sizeStyles = {
  sm: "height: 2rem; width: 2rem;",
  md: "height: 3rem; width: 3rem;",
  lg: "height: 4rem; width: 4rem;",
};

const borderRadiusStyles = {
  true: "border-radius: 0;",
  false: "border-radius: 9999px;",
};

const borderStyles = {
  true: "border: 0;",
  false: "border: 2px solid #007ac0;",
};

const StyledAvatar = styled.div<TAvatarProps>`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  overflow: hidden;
  ${({ size }) => sizeStyles[size]}
  ${({ square }) => borderRadiusStyles[square ? "true" : "false"]}
  ${({ noBorder }) => borderStyles[noBorder ? "true" : "false"]}
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Avatar = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TAvatarProps>
>(
  (
    {
      alt = "",
      noBorder = false,
      size = "md",
      square = false,
      src = "",
      children,
      className,
      ...otherProps
    },
    ref
  ) => {
    return (
      <StyledAvatar
        ref={ref}
        data-testid="avatar"
        className={className}
        size={size}
        square={square}
        noBorder={noBorder}
        {...otherProps}
      >
        {src ? <StyledImage src={src} alt={alt} /> : children}
      </StyledAvatar>
    );
  }
);

export const MAvatar = motion(Avatar);
