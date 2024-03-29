import { forwardRef, Ref } from "react";
import { Button, ButtonProps } from "./Button";

export const LinkButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => (
    <Button variant="link" {...props} ref={ref} />
  )
);
