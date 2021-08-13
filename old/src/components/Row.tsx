import React, { PropsWithChildren } from "react";

export default function Row({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  const rowClass = `row ${className ?? ""}`.trim();
  return <div className={rowClass}>{children}</div>;
}
