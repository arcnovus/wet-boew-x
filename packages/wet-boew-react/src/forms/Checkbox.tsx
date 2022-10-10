import { forwardRef } from "react";
import { FormControlProps } from "./FormControl";

export type CheckboxProps = Omit<FormControlProps, "type"> & {
  layout?: "inline" | "block";
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, language, layout, required, name, ...props }, ref) => {
    let className = layout === "inline" ? "checkbox-inline" : "checkbox";
    return (
      <div className={className}>
        <label id={`${id}-label`} htmlFor={id} style={{ fontWeight: "normal" }}>
          <input
            type="checkbox"
            name={name}
            id={id}
            ref={ref}
            {...props}
            data-rule-required={required}
          />
          {label}
        </label>
      </div>
    );
  }
);

export const InlineCheckbox = forwardRef<
  HTMLInputElement,
  Omit<CheckboxProps, "layout">
>((props, ref) => <Checkbox {...props} ref={ref} layout="inline" />);
