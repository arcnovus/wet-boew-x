import { forwardRef } from "react";
import { FormControlProps } from "./FormControl";
import { InputLabel } from "./InputLabel";

export type FileInputProps = Omit<FormControlProps, "type">;

export const FileInput = forwardRef<HTMLInputElement, FormControlProps>(
  ({ id, label, language, ...props }, ref) => (
    <>
      <InputLabel
        htmlFor={id}
        language={language}
        id={`${id}-label`}
        label={label}
        required={props.required}
      />
      <input id={id} ref={ref} type="file" {...props} />
    </>
  )
);
