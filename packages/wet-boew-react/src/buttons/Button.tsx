import { PropsWithChildren } from "react";

export const buttonCssClasses = {
  default: "btn btn-default",
  primary: "btn btn-primary",
  success: "btn btn-success",
  info: "btn btn-info",
  warning: "btn btn-warning",
  danger: "btn btn-danger",
  link: "btn btn-link",
} as const;

export type ButtonVariant = keyof typeof buttonCssClasses;

export type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps extends HtmlButtonProps {
  variant?: ButtonVariant;
}

export const Button = ({
  variant,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <button className={buttonCssClasses[variant ?? "default"]} {...props} />
);
