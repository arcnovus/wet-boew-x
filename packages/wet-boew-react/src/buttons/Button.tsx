import { forwardRef, PropsWithChildren, Ref } from "react";
import { Variant } from "../Variant";

export type HtmlButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "ref"
>;

export type ButtonVariant = Variant | "link";

export interface ButtonProps extends HtmlButtonProps {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, ...props }, ref) => (
    <button
      className={`btn btn-${variant ?? "default"}`}
      {...props}
      ref={ref}
    />
  )
);
