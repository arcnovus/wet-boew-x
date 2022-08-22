export type HtmlLabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export interface InputLabelProps extends HtmlLabelProps {
  label: string;
  id: string;
  required?: boolean;
  language: "en" | "fr";
}

const labels = {
  en: {
    required: "required",
  },
  fr: {
    required: "obligatoire",
  },
};

export function InputLabel({
  id,
  label,
  language,
  htmlFor,
  ...props
}: InputLabelProps) {
  return (
    <label
      id={id}
      htmlFor={htmlFor}
      className={props.required ? "required" : ""}
    >
      <span className="field-name">{label}</span>{" "}
      {props.required && (
        <strong className="required" aria-hidden={true}>
          ({labels[language].required})
        </strong>
      )}
    </label>
  );
}
