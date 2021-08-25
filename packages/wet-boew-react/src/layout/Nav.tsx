import { HTMLAttributes, PropsWithChildren } from "react";
import { useColumn } from "../grids";
import { ColumnProps } from "../grids/useColumn";

export function Nav({
  children,
  ...props
}: PropsWithChildren<ColumnProps & HTMLAttributes<HTMLElement>>) {
  const { columnCssClass, additionalProps } = useColumn(props);
  return (
    <nav
      className={columnCssClass}
      typeof="SiteNavigationElement"
      role="navigation"
      {...additionalProps}
    >
      {children}
    </nav>
  );
}
