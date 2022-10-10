import { forwardRef } from "react";

export type ResetButtonProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const ResetButton = forwardRef<
  HTMLInputElement,
  Omit<ResetButtonProps, "type">
>(({ value, ...props }, ref) => (
  <input
    type="reset"
    value={value}
    className="btn btn-link btn-sm show p-0 mrgn-tp-md"
    ref={ref}
    {...props}
  ></input>
));
