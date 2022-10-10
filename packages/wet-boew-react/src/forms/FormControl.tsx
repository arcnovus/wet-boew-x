import { Language } from "../language";
import React, { forwardRef } from "react";
import { InputLabel } from "./InputLabel";

export type HtmlInputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  | "ref" // remove legacy ref type
  | "className" // remove className type
>;

// make id mandatory
export interface FormControlProps extends HtmlInputProps {
  id: string;
  language?: Language | null;
  label?: string;
}

export const FormControl = forwardRef<HTMLInputElement, FormControlProps>(
  ({ id, label, language, ...props }: FormControlProps, ref) => (
    <>
      {label && (
        <InputLabel
          htmlFor={id}
          language={language}
          id={`${id}-label`}
          label={label}
          required={props.required}
        />
      )}
      <input id={id} ref={ref} {...props} className="form-control" />
    </>
  )
);
