import { forwardRef } from "react";
import { Language } from "../language";
import { InputLabel } from "./InputLabel";

export type SelectProps = Omit<
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >,
  "ref"
> & {
  id: string;
  options: Array<{ value: string; label: string }>;
  language?: Language | null;
  optionsLabel: string;
  label?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, optionsLabel, options, label, required, ...props }, ref) => (
    <>
      <InputLabel
        htmlFor={id}
        id={`${id}-label`}
        label={label}
        required={required}
      />
      <select
        required={required}
        id={id}
        ref={ref}
        {...props}
        className="form-control"
      >
        <option label={optionsLabel} />
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
);
