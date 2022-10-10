import { Language, useLanguage } from "../language";
import { forwardRef, PropsWithChildren } from "react";
import { useRequiredLabel } from "./useRequiredLabel";

export type CheckboxRadioGroupProps = Omit<
  React.DetailedHTMLProps<
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  >,
  | "ref" // remove legacy ref type
  | "className" // remove className type
> & {
  label?: string;
  required?: boolean;
  language?: Language | null;
};

export const CheckboxRadioGroup = forwardRef<
  HTMLFieldSetElement,
  PropsWithChildren<CheckboxRadioGroupProps>
>(({ children, label, language, ...props }, ref) => {
  let { currentLanguage } = useLanguage();
  language = language ?? currentLanguage;
  if (language == null) {
    console.warn(
      "Unable to determine language from URL. Defaulting to English."
    );
    language = Language.EN;
  }
  let requiredLabel = useRequiredLabel({ language });
  return (
    <fieldset className="chkbxrdio-grp" {...props} ref={ref}>
      {label && (
        <legend className={props.required ? "required" : ""}>
          <span className="field-name">{label}</span>{" "}
          {props.required && (
            <strong className="required">{requiredLabel}</strong>
          )}
        </legend>
      )}
      {children}
    </fieldset>
  );
});

export const CheckboxGroup = CheckboxRadioGroup;
export const RadioGroup = CheckboxRadioGroup;
export type CheckboxGroupProps = CheckboxRadioGroupProps;
export type RadioGroupProps = CheckboxRadioGroupProps;
