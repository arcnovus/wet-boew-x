import { HTMLAttributes, PropsWithChildren } from "react";

export function Row({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <div className={`${className} row`.trim()} {...props}>
      {children}
    </div>
  );
}
