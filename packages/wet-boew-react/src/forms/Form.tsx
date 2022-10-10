import { forwardRef, PropsWithChildren, useLayoutEffect } from "react";
import { registerWetComponent } from "../wet";

export type HtmlFormProps = Omit<
  | React.DetailedHTMLProps<
      React.FormHTMLAttributes<HTMLFormElement>,
      HTMLFormElement
    > & {
      id: string;
      legend: string;
      layout?: "horizontal" | "vertical";
    },
  | "ref" // remove legacy ref type
  | "className" // remove className type
>;

export const Form = forwardRef<
  HTMLFormElement,
  PropsWithChildren<HtmlFormProps>
>(({ children, id, legend, layout = "vertical", ...props }, ref) => {
  const validationWrapperId = `${id}-validation-wrapper`;
  useLayoutEffect(() => {
    registerWetComponent(`#${validationWrapperId}`);
  }, [validationWrapperId]);
  let formCss = layout === "horizontal" ? "form-horizontal" : "";
  return (
    <div id={validationWrapperId} className="wb-frmvld">
      <form
        role="form"
        {...props}
        ref={ref}
        id={id}
        className={formCss}
        noValidate={props.noValidate ?? true}
      >
        <fieldset>
          <legend>{legend}</legend>
          {children}
        </fieldset>
      </form>
    </div>
  );
});
