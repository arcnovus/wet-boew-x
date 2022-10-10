import { forwardRef } from "react";
import { FormControl, FormControlProps } from "./FormControl";

export type PasswordInputProps = Omit<FormControlProps, "type">;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => <FormControl ref={ref} type="password" {...props} />
);
