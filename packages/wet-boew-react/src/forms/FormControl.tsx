import { InputLabel } from "./InputLabel";

export type HtmlInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// make id mandatory
export interface FormControlProps extends HtmlInputProps {
  id: string;
  language: "en" | "fr";
  label?: string;
}

export function FormControl({
  id,
  label,
  language,
  ...props
}: FormControlProps) {
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
      <input id={id} {...props} className="form-control" />
    </>
  );
}
