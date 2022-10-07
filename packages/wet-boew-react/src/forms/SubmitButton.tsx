import { Button, ButtonProps, ButtonVariant } from "../buttons";

export type SubmitButtonProps = ButtonProps & { variant?: ButtonVariant };

export function SubmitButton({ id, value, variant, ...props }: ButtonProps) {
  return (
    <Button
      type="submit"
      id={id}
      variant={variant ?? "primary"}
      value={value}
      {...props}
    />
  );
}
