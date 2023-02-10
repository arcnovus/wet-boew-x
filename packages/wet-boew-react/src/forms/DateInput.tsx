import { forwardRef } from "react";
import { useLanguage } from "../language";
import type { FormControlProps } from "./FormControl";
import { FormGroup } from "./FormGroup";
import { InputLabel } from "./InputLabel";

export type DateInputProps = Omit<FormControlProps, "type" | "min" | "max"> & {
  max?: Date;
  min?: Date;
  dateHint?: string;
};

const defaultDateHint = {
  en: "Four digits year, dash, two digits month, dash, two digits day",
  fr: "Quatre chiffres pour l'année, tiret, deux chiffres pour le mois, tiret, deux chiffres pour le jour",
  unknown:
    "Four digits year, dash, two digits month, dash, two digits day / Quatre chiffres pour l'année, tiret, deux chiffres pour le mois, tiret, deux chiffres pour le jour",
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  ({ min, max, label, id, language, dateHint, ...props }, ref) => {
    let { currentLanguage } = useLanguage();
    language = language ?? currentLanguage;

    // Avoid the temptation to use toLocaleDateString("en-CA") here.
    // Chrome on Windows will return a date in the format "YYYY/MM/DD"
    // instead of "YYYY-MM-DD".
    function formatMinMaxDate(date: Date): string {
      const year = date.getFullYear();
      const month = `0${date.getMonth() + 1}`.slice(-2);
      const day = `0${date.getDate()}`.slice(-2);

      return `${year}-${month}-${day}`;
    }

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
                  (
                  <abbr
                    title={dateHint ?? defaultDateHint[language ?? "unknown"]}
                  >
                    YYYY-MM-DD
                  </abbr>
                  )
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
          ref={ref}
          {...props}
          min={min ? formatMinMaxDate(min) : undefined}
          max={max ? formatMinMaxDate(max) : undefined}
        />
      </FormGroup>
    );
  }
);

export const DatePicker = DateInput;
export type DatePickerProps = DateInputProps;
