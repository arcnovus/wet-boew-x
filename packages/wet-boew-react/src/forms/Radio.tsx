import { forwardRef } from "react";
import { FormControlProps } from "./FormControl";

export type RadioProps = Omit<FormControlProps, "type"> & {
  layout?: "inline" | "block";
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, id, language, layout, required, ...props }, ref) => {
    let className = layout === "inline" ? "radio-inline" : "radio";
    return (
      <div className={className}>
        <label id={`${id}-label`} htmlFor={id} style={{ fontWeight: "normal" }}>
          <input
            type="radio"
            id={id}
            data-rule-required={required}
            ref={ref}
            {...props}
          />
          {label}
        </label>
      </div>
    );
  }
);

export const InlineRadio = forwardRef<
  HTMLInputElement,
  Omit<RadioProps, "layout">
>((props: Omit<RadioProps, "layout">, ref) => (
  <Radio {...props} ref={ref} layout="inline" />
));
