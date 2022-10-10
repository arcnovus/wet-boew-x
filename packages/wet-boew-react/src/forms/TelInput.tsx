import { forwardRef } from "react";
import { FormControl, FormControlProps } from "./FormControl";

export type TelInputProps = Omit<FormControlProps, "type">;

export const TelInput = forwardRef<HTMLInputElement, TelInputProps>(
  (props, ref) => (
    <FormControl
      type="tel"
      autoComplete={props.autoComplete ?? "tel"}
      ref={ref}
      {...props}
    />
  )
);
