import * as React from "react";
import { useColumn, ColumnProps } from "../grid-system";

export default function Section({
  children,
  ...props
}: React.PropsWithChildren<ColumnProps & React.HTMLAttributes<any>>) {
  const { columnCssClass } = useColumn(props);
  return (
    <section className={columnCssClass} id={props.id}>
      {children}
    </section>
  );
}
