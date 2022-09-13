import { PropsWithChildren } from "react";
import { Variant } from "../variants";

export type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonVariant = Variant | "link";

export interface ButtonProps extends HtmlButtonProps {
  variant?: ButtonVariant;
}

export const Button = ({
  variant,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <button className={`btn btn-${variant ?? "default"}`} {...props} />
);
