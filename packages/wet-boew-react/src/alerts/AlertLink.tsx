import { forwardRef, Ref } from "react";

export type AlertLinkProps = Omit<
  React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>,
  "ref"
>;

export const AlertLink = forwardRef<HTMLAnchorElement, AlertLinkProps>(
  ({ children, className }, ref): JSX.Element => (
    <a
      style={{ cursor: "pointer", textDecoration: "underline" }}
      className={`alert-link ${className ?? ""}`.trim()}
      ref={ref}
    >
      {children}
    </a>
  )
);
