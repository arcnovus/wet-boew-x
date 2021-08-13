import * as React from "react";
import { useColumn, ColumnProps } from "../grid-system";

export default function Column({
  children,
  ...props
}: React.PropsWithChildren<ColumnProps & React.HTMLAttributes<any>>) {
  const { columnCssClass } = useColumn(props);
  return (
    <div
      className={columnCssClass}
      typeof={props.typeof}
      resource={props.resource}
      property={props.property}
      id={props.id}
    >
      {children}
    </div>
  );
}
