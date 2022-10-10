import { forwardRef } from "react";
import { FormControl, FormControlProps } from "./FormControl";

export type UrlInputProps = Omit<FormControlProps, "type">;

export const UrlInput = forwardRef<HTMLInputElement, UrlInputProps>(
  (props, ref) => (
    <FormControl
      autoComplete={props.autoComplete ?? "url"}
      type="url"
      ref={ref}
      {...props}
    />
  )
);
