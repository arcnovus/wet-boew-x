import { forwardRef, Ref } from "react";
import { Button, ButtonProps } from "./Button";

export const SuccessButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => (
    <Button variant="success" {...props} />
  )
);
