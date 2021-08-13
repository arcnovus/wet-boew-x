import { computeColumnCssClass } from "./column-utils";

import type { ColumnProps } from "./column-utils";

export default function useColumn(props: ColumnProps) {
  const columnCssClass = computeColumnCssClass(props);
  return { columnCssClass };
}

export type { ColumnProps } from "./column-utils";
