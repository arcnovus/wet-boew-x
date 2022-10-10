import { forwardRef } from "react";
import { ButtonVariant } from "../buttons";

export type SubmitButtonProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { variant?: ButtonVariant };

export const SubmitButton = forwardRef<HTMLInputElement, SubmitButtonProps>(
  ({ id, value, variant, ...props }, ref) => (
    <input
      type="submit"
      id={id}
      ref={ref}
      className={`btn btn-${variant ?? "primary"}`}
      value={value}
      {...props}
    />
  )
);
