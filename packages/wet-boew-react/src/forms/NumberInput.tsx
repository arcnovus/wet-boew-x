import { forwardRef } from "react";
import { FormControl, FormControlProps } from "./FormControl";

export type NumberInputProps = Omit<FormControlProps, "type">;

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => <FormControl ref={ref} type="number" {...props} />
);
