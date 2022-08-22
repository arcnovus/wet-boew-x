import { PropsWithChildren, useLayoutEffect } from "react";
import { registerWetComponent } from "../wet";

export interface HtmlFormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  id: string;
  legend: string;
}

export function Form({
  children,
  id,
  legend,
  ...props
}: PropsWithChildren<HtmlFormProps>) {
  const validationWrapperId = `${id}-validation-wrapper`;
  useLayoutEffect(() => {
    registerWetComponent(`#${validationWrapperId}`);
  }, [validationWrapperId]);
  return (
    // WARNING: Do not remove the outer `<div>` below!
    // WET injects DOM nodes outside the `<div id={validationWrapperId}>` which React will error on
    // if they are not inside a parent node of this component.
    // Wrapping our validation div in another `<div>` fixes this.
    <div>
      <div
        id={validationWrapperId}
        className="wb-frmvld"
        style={{ marginTop: "100px" }}
      >
        <form role="form" {...props} id={id}>
          <fieldset>
            <legend>{legend}</legend>
            {children}
          </fieldset>
        </form>
      </div>
    </div>
  );
}
