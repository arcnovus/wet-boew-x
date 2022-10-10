import { forwardRef, Ref } from "react";
import { Button, ButtonProps } from "./Button";

export const WarningButton = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => (
    <Button variant="warning" ref={ref} {...props} />
  )
);
