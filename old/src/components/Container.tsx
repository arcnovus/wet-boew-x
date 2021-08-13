import * as React from "react";
import { useContainer, ContainerProps } from "../grid-system";

export default function Container({
  children,
  variant,
  className,
  ...props
}: React.PropsWithChildren<ContainerProps & Record<string, any>>) {
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
