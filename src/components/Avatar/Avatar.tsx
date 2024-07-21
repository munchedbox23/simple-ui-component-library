import { forwardRef, ComponentProps, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames";
import { motion } from "framer-motion";

type TAvatarProps = ComponentProps<"div"> &
  VariantProps<typeof avatarStyles> & {
    alt?: string;
    noBorder?: boolean;
    size: "sm" | "md" | "lg";
    square?: boolean;
    src?: string;
  };

const avatarStyles = cva(
  "inline-block box-border object-contain overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-12 w-12",
        lg: "h-16 w-16",
      },
      square: {
        true: "rounded-none",
        false: "rounded-full",
      },
      noBorder: {
        true: "border-0",
        false: "border-2 border-primary-500 border-primary-600 ",
      },
    },
    defaultVariants: {
      size: "md",
      square: false,
      noBorder: false,
    },
  }
);

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
      <div
        ref={ref}
        className={cn(avatarStyles({ size, square, noBorder }), className)}
        {...otherProps}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-contain" />
        ) : (
          children
        )}
      </div>
    );
  }
);

export const MAvatar = motion(Avatar);
