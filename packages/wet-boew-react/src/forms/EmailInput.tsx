import { FormControl, FormControlProps } from "./FormControl";
import { forwardRef } from "react";

export type EmailInputProps = Omit<FormControlProps, "type">;

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  (props, ref) => (
    <FormControl
      ref={ref}
      type="email"
      autoComplete={props.autoComplete ?? "email"}
      {...props}
    />
  )
);
