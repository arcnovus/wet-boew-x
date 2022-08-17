import { ButtonVariant, useButtonVariant } from "../buttons";

interface SubmitButtonProps {
  id: string;
  value: string;
  variant?: ButtonVariant;
}

export function SubmitButton({ id, value, ...props }: SubmitButtonProps) {
  return (
    <input
      type="submit"
      id={id}
      value={value}
      className={useButtonVariant(props.variant ?? "primary")}
      {...props}
    />
  );
}
