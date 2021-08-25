import { PropsWithChildren, HTMLAttributes } from "react";
import { useColumn } from ".";
import { ColumnProps } from "@arcnovus/wet-boew-utils";

export function Column({
  children,
  resource,
  property,
  id,
  ...props
}: PropsWithChildren<ColumnProps & HTMLAttributes<HTMLElement>>) {
  const { columnCssClass } = useColumn(props);
  return (
    <div
      className={columnCssClass}
      typeof={props.typeof}
      resource={resource}
      property={property}
      id={id}
    >
      {children}
    </div>
  );
}
