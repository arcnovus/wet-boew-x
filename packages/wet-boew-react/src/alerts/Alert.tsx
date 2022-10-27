import React, { forwardRef, Ref } from "react";
import { Variant } from "../Variant";

export type AlertVariant = Pick<
  Variant,
  "info" & "success" & "warning" & "danger"
>;

export const Alert = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ variant: AlertVariant }>
>(({ children, variant }, ref) => (
  <div className={`alert alert-${variant}`} ref={ref}>
    {children}
  </div>
));
