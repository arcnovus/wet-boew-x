import { forwardRef } from "react";
import { FormControl, FormControlProps } from "./FormControl";

export type TextInputProps = Omit<FormControlProps, "type">;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => <FormControl type="text" ref={ref} {...props} />
);
