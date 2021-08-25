import React from "react";

export default function Well(props: React.PropsWithChildren<WellProps>) {
  const wellCssClass = computeWellCssClass(props);
  return <div className={wellCssClass}>{props.children}</div>;
}

interface WellProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

function computeWellCssClass({ size, className }: WellProps) {
  const sizeCssClass = computeSizeCssClassName(size);
  return `well ${sizeCssClass} ${className}`.trim();
}

function computeSizeCssClassName(size: WellProps["size"]) {
  switch (size) {
    case "small":
      return `well-sm`;
    case "medium":
      return "";
    case "large":
      return `well-lg`;
    default:
      return "";
  }
}
