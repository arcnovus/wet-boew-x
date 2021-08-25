import { PropsWithChildren } from "react";
import { useContainer } from ".";
import { ContainerProps } from "@arcnovus/wet-boew-utils";

export function Container({
  children,
  variant,
  className,
  ...props
}: PropsWithChildren<ContainerProps & Record<string, any>>) {
  const { containerCssClass } = useContainer({
    variant,
    className,
  });

  return (
    <div className={containerCssClass} {...props}>
      {children}
    </div>
  );
}
