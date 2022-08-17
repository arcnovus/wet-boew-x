import { FormControl, FormControlProps } from "./FormControl";

type PasswordInputProps = Omit<FormControlProps, "type">;

export function PasswordInput(props: PasswordInputProps) {
  return <FormControl type="password" {...props} />;
}
