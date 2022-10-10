import { forwardRef, Ref } from "react";
import { ButtonProps, Button } from "./Button";

export const DangerButton = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => (
    <Button variant="danger" {...props} ref={ref} />
  )
);
