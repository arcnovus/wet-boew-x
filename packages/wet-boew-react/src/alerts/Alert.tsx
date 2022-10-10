import React, { forwardRef, Ref } from "react";
import { Variant } from "../Variant";

export type AlertVariant = Pick<
  Variant,
  "info" & "success" & "warning" & "danger"
>;

export const Alert = forwardRef(
  (
    { children, variant }: React.PropsWithChildren<{ variant: AlertVariant }>,
    ref: Ref<HTMLDivElement>
  ) => (
    <div className={`alert alert-${variant}`} ref={ref}>
      {children}
    </div>
  )
);
