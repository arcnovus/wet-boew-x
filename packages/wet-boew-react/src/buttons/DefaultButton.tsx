import React, { forwardRef } from "react";
import { ButtonProps, Button } from "./Button";

export const DefaultButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <Button ref={ref} variant="default" {...props} />
  )
);
