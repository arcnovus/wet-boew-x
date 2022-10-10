import { forwardRef } from "react";
import { Language } from "../language";
import { InputLabel } from "./InputLabel";

export type HtmlTextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

// make id mandatory
export interface TextAreaProps extends HtmlTextAreaProps {
  id: string;
  language?: Language;
  label?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, label, language, ...props }, ref) => (
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
      <textarea id={id} ref={ref} {...props} className="form-control" />
    </>
  )
);
