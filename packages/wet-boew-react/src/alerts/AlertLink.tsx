export function AlertLink({
  children,
  className,
}: React.PropsWithChildren<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>): JSX.Element {
  return (
    <a
      style={{ cursor: "pointer", textDecoration: "underline" }}
      className={`alert-link ${className ?? ""}`.trim()}
    >
      {children}
    </a>
  );
}
