import { PropsWithChildren } from "react";
import { useButtonVariant, ButtonVariant } from "./useButtonVariant";

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
  <button className={useButtonVariant(variant ?? "default")} {...props} />
);
