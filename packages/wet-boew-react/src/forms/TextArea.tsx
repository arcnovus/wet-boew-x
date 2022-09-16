import { InputLabel } from "./InputLabel";

export type HtmlTextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

// make id mandatory
export interface TextAreaProps extends HtmlTextAreaProps {
  id: string;
  language: "en" | "fr";
  label?: string;
}

export function TextArea({ id, label, language, ...props }: TextAreaProps) {
  return (
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
      <textarea id={id} value="hhh" {...props} className="form-control" />
    </>
  );
}
