import { PropsWithChildren, HTMLAttributes } from "react";
import { ColumnProps, useColumn } from "../grids/useColumn";

export function Main({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement> & ColumnProps>) {
  const { columnCssClass, additionalProps } = useColumn({
    ...props,
    className: `${props.className ?? ""} container`.trim(),
  });
  return (
    <main
      property="mainContentOfPage"
      resource="#wb-main"
      className={columnCssClass}
      typeof="WebPageElement"
      {...additionalProps}
    >
      {children}
    </main>
  );
}
