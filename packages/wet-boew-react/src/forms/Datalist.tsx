import { forwardRef, Ref } from "react";
import { FormControlProps } from "./FormControl";
import { InputLabel } from "./InputLabel";

export type DatalistProps = Omit<FormControlProps, "type"> & {
  options: Array<{ value: string; label: string }>;
};

export const Datalist = forwardRef<HTMLInputElement, DatalistProps>(
  (
    { id, language, label, required, options, ...props }: DatalistProps,
    ref: Ref<HTMLInputElement>
  ) => (
    <>
      <InputLabel
        htmlFor={id}
        language={language}
        id={`${id}-label`}
        label={label}
        required={required}
      />
      <input
        type="text"
        id={id}
        ref={ref}
        list={`${id}-datalist`}
        {...props}
        className="form-control"
        required={required}
      />
      <datalist id={`${id}-datalist`}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </datalist>
    </>
  )
);

export const DataList = Datalist;
export type DataListProps = DatalistProps;
