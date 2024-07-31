import { Column } from 'react-table';
import { ComponentProps } from 'react';
import { CustomDomComponent } from 'framer-motion';
import { default as default_2 } from 'react';
import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { InputBaseProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { RefAttributes } from 'react';

declare const alignStyles: {
    left: string;
    center: string;
    right: string;
};

declare type AsProp<C extends default_2.ElementType> = {
    /**
     * An override of the default HTML tag.
     * Can also be another React component.
     */
    as?: C;
};

export declare const Avatar: ForwardRefExoticComponent<Omit<PropsWithChildren<TAvatarProps>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const Button: ForwardRefExoticComponent<Omit<PropsWithChildren<TButtonProps>, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare const Checkbox: default_2.ForwardRefExoticComponent<Omit<default_2.InputHTMLAttributes<HTMLInputElement>, "label" | "size" | "variant"> & {
    label?: string;
    size?: keyof typeof sizeStyles;
    variant?: "default" | "primary" | "secondary";
} & default_2.RefAttributes<HTMLInputElement>>;

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
declare type ExtendableProps<ExtendedProps = {}, OverrideProps = {}> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

export declare const Hourglass: default_2.ForwardRefExoticComponent<{
    size?: string | number;
} & default_2.HTMLAttributes<HTMLDivElement> & default_2.RefAttributes<HTMLDivElement>>;

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
declare type InheritableElementProps<C extends default_2.ElementType, Props = {}> = ExtendableProps<PropsOf<C>, Props>;

export declare const Input: ForwardRefExoticComponent<Omit<TInputProps, "ref"> & RefAttributes<HTMLInputElement>>;

export declare const MAvatar: CustomDomComponent<Omit<PropsWithChildren<TAvatarProps>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare const MButton: CustomDomComponent<Omit<PropsWithChildren<TButtonProps>, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare const MCheckbox: CustomDomComponent<Omit<default_2.InputHTMLAttributes<HTMLInputElement>, "label" | "size" | "variant"> & {
    label?: string;
    size?: keyof typeof sizeStyles;
    variant?: "default" | "primary" | "secondary";
} & default_2.RefAttributes<HTMLInputElement>>;

export declare const MHourglass: CustomDomComponent<    {
    size?: string | number;
} & default_2.HTMLAttributes<HTMLDivElement> & default_2.RefAttributes<HTMLDivElement>>;

export declare const MInput: CustomDomComponent<Omit<TInputProps, "ref"> & RefAttributes<HTMLInputElement>>;

export declare const MStack: CustomDomComponent<    {
    children: default_2.ReactNode;
    spacing?: "none" | "sm" | "md" | "lg" | "xl";
    direction?: "row" | "column";
    align?: "start" | "center" | "end" | "stretch";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
} & default_2.HTMLAttributes<HTMLDivElement> & default_2.RefAttributes<HTMLDivElement>>;

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
declare type PolymorphicComponentProps<C extends default_2.ElementType, Props = {}> = InheritableElementProps<C, Props & AsProp<C>>;

declare type PolymorphicComponentPropsWithRef<C extends default_2.ElementType, Props = {}> = PolymorphicComponentProps<C, Props> & {
    ref?: PolymorphicRef<C>;
};

declare type PolymorphicRef<C extends default_2.ElementType> = default_2.ComponentPropsWithRef<C>["ref"];

declare type PropsOf<C extends keyof JSX.IntrinsicElements | default_2.JSXElementConstructor<unknown>> = JSX.LibraryManagedAttributes<C, default_2.ComponentPropsWithoutRef<C>>;

declare const sizeStyles: {
    sm: string;
    md: string;
    lg: string;
};

declare const sizeStyles_2: {
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
};

export declare const Stack: default_2.ForwardRefExoticComponent<{
    children: default_2.ReactNode;
    spacing?: "none" | "sm" | "md" | "lg" | "xl";
    direction?: "row" | "column";
    align?: "start" | "center" | "end" | "stretch";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
} & default_2.HTMLAttributes<HTMLDivElement> & default_2.RefAttributes<HTMLDivElement>>;

export declare const Table: FC<TTableProps>;

declare type TAvatarProps = ComponentProps<"div"> & {
    alt?: string;
    noBorder?: boolean;
    size: "sm" | "md" | "lg";
    square?: boolean;
    src?: string;
};

declare type TButtonProps = ComponentProps<"button"> & {
    size: "sm" | "md" | "lg";
    type: "button" | "submit" | "reset";
    variant: "primary" | "secondary" | "ghost";
};

declare const Text_2: TextComponent;
export { Text_2 as Text }

declare type TextComponent = <C extends React.ElementType = "span">(props: TextProps<C>) => React.ReactElement | null;

declare type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, {
    emphasis?: "low";
    size?: keyof typeof sizeStyles_2;
    weight?: keyof typeof weightStyles;
    align?: keyof typeof alignStyles;
    italic?: boolean;
    underline?: boolean;
}>;

declare type TInputProps = InputBaseProps & {
    type: "email" | "text" | "password" | "number" | "date";
    variant?: "rounded" | "rectangular";
};

declare type TTableProps<D extends object = {}> = {
    columns: Column<D>[];
    data: D[];
};

declare const weightStyles: {
    thin: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
    black: string;
};

export { }
