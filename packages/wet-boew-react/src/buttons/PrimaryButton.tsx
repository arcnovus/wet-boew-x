import { forwardRef, Ref } from "react";
import { Button, ButtonProps } from "./Button";

export const PrimaryButton = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => (
    <Button variant="primary" {...props} ref={ref} />
  )
);
