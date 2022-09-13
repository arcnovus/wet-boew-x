import type { FormControlProps } from "./FormControl";
import { FormGroup } from "./FormGroup";
import { InputLabel } from "./InputLabel";

export type DateInputProps = Omit<FormControlProps, "type" | "min" | "max"> & {
  max?: Date;
  min?: Date;
};

const dateHint = {
  en: "Four digits year, dash, two digits month, dash, two digits day",
  fr: "Quatre chiffres pour l'année, tiret, deux chiffres pour le mois, tiret, deux chiffres pour le jour",
};

export function DateInput({
  min,
  max,
  label,
  id,
  language,
  ...props
}: DateInputProps) {
  min = min ?? new Date(-8640000000000000);
  max = max ?? new Date(8640000000000000);
  return (
    <FormGroup>
      {label != null && (
        <InputLabel
          htmlFor={id}
          language={language}
          id={`${id}-label`}
          label={
            <>
              {label}
              <span className="datepicker-format">
                (<abbr title={dateHint[language]}>YYYY-MM-DD</abbr>)
              </span>
            </>
          }
          required={props.required}
        />
      )}
      <br />
      <input
        id={id}
        type="date"
        {...props}
        min={min.toLocaleDateString("en-CA")}
        max={max.toLocaleDateString("en-CA")}
      />
    </FormGroup>
  );
}
