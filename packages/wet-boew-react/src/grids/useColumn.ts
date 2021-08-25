import { computeColumnCssClass } from "@arcnovus/wet-boew-utils";

import type { ColumnProps } from "@arcnovus/wet-boew-utils";
import { HTMLAttributes, useMemo } from "react";

export function useColumn(props: ColumnProps) {
  return useMemo(
    () => ({
      columnCssClass: computeColumnCssClass(props),
      additionalProps: removeColumnProps(props),
    }),
    [props, computeColumnCssClass]
  );
}

function removeColumnProps(props: ColumnProps & HTMLAttributes<HTMLElement>) {
  const {
    xs,
    sm,
    md,
    lg,
    xsoffset,
    smoffset,
    mdoffset,
    lgoffset,
    xspull,
    smpull,
    mdpull,
    lgpull,
    xspush,
    smpush,
    mdpush,
    lgpush,
    className,
    ...rest
  } = props ?? {};

  return rest;
}

export type { ColumnProps } from "@arcnovus/wet-boew-utils";
