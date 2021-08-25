import { useLayoutEffect } from "react";
import { registerWetComponent, useWetComponent } from "../wet";
import { TableProps, Table } from "./Table";
import { renderToStaticMarkup } from "react-dom/server";

export function DataTable({
  className,
  children,
  settings,
  ...props
}: React.PropsWithChildren<
  React.HTMLAttributes<HTMLTableElement> &
    TableProps & {
      /**
       * See https://datatables.net/reference/option/
       *
       * @type {(DataTables.Settings | DataTables.SettingsLegacy)}
       */
      settings?: DataTables.Settings | DataTables.SettingsLegacy;
      caption: string;
      id: string;
    }
>) {
  useLayoutEffect(() => {
    registerWetComponent(".wb-tables");
  }, [settings]);

  const strSettings = JSON.stringify(settings ?? {});
  return (
    // WARNING: Do not remove the outer `<div>` below!
    // WET injects DOM nodes outside the `<table>` which React will error on
    // if they are not inside a parent node of this component.
    // Wrapping our table in a `<div>` fixes this.
    <div>
      <Table
        className={`${className ?? ""} wb-tables`.trim()}
        data-wb-tables={strSettings}
        {...props}
      >
        {children}
      </Table>
    </div>
  );
}
