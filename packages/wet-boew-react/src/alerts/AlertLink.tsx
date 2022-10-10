import { forwardRef, Ref } from "react";

export type AlertLinkProps = Omit<
  React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>,
  "ref"
>;

export const AlertLink = forwardRef(
  (
    { children, className }: AlertLinkProps,
    ref: Ref<HTMLAnchorElement>
  ): JSX.Element => (
    <a
      style={{ cursor: "pointer", textDecoration: "underline" }}
      className={`alert-link ${className ?? ""}`.trim()}
      ref={ref}
    >
      {children}
    </a>
  )
);
