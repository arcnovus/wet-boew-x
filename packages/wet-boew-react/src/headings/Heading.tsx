import { createElement, HTMLAttributes, PropsWithChildren } from "react";

export type HeadingProps = PropsWithChildren<
  HTMLAttributes<HTMLHeadingElement> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    variant?: "page-header" | "default";
  }
>;

export function Heading({
  children,
  level,
  className,
  variant,
  ...props
}: HeadingProps) {
  const cssClass = computeHeadingCssClass({ className, variant });
  return createElement(
    `h${level ?? 1}`,
    { ...props, className: cssClass },
    children
  );
}

function computeHeadingCssClass({
  variant,
  className,
}: {
  variant?: "page-header" | "default";
  className?: string;
}) {
  if (variant === "page-header") {
    return `${className} page-header`.trim();
  }
  return className;
}
