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
    <div id={validationWrapperId} className="wb-frmvld">
      <form role="form" {...props} id={id}>
        <fieldset>
          <legend>{legend}</legend>
          {children}
        </fieldset>
      </form>
    </div>
  );
}
