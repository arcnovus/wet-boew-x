import { forwardRef, Ref } from "react";
import { ButtonProps, Button } from "./Button";

export const InfoButton = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => (
    <Button variant="info" ref={ref} {...props} />
  )
);
