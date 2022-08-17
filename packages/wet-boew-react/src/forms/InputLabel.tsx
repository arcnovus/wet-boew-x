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

export function InputLabel({ id, label, language, ...props }: InputLabelProps) {
  return (
    <label htmlFor={id} className={props.required ? "required" : ""}>
      <span className="field-name">{label}</span>{" "}
      {props.required && (
        <strong className="required">({labels[language].required})</strong>
      )}
    </label>
  );
}
