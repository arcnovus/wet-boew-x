import React from "react";
import { Variant } from "../variants";

export type AlertVariant = Pick<
  Variant,
  "info" & "success" & "warning" & "danger"
>;

export function Alert({
  children,
  variant,
}: React.PropsWithChildren<{ variant: AlertVariant }>): JSX.Element {
  return <div className={`alert alert-${variant}`}>{children}</div>;
}
