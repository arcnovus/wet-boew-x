import React from "react";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export function Alert({
  children,
  variant,
}: React.PropsWithChildren<{ variant: AlertVariant }>): JSX.Element {
  return <div className={`alert alert-${variant}`}>{children}</div>;
}
