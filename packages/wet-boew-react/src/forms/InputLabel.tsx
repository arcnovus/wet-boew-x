import { Language } from "@arcnovus/wet-boew-utils";
import { forwardRef, ReactNode } from "react";
import { useRequiredLabel } from "./useRequiredLabel";
import { useLanguage } from "../language";

export type HtmlLabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export interface InputLabelProps extends HtmlLabelProps {
  label: string | ReactNode;
  id: string;
  required?: boolean;
  language?: Language | null;
}

export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ id, label, language, htmlFor, ...props }, ref) => {
    let { currentLanguage } = useLanguage();
    language = language || currentLanguage;
    if (language == null) {
      console.warn(
        "Unable to determine language from URL. Defaulting to English."
      );
      language = Language.EN;
    }
    let requiredLabel = useRequiredLabel({ language });
    return (
      <label
        id={id}
        ref={ref}
        htmlFor={htmlFor}
        className={props.required ? "required" : ""}
      >
        <span className="field-name">{label}</span>{" "}
        {props.required && (
          <strong className="required" aria-hidden={true}>
            {requiredLabel}
          </strong>
        )}
      </label>
    );
  }
);
