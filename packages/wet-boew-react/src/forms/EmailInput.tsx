import { FormControl, FormControlProps } from "./FormControl";

export type EmailInputProps = Omit<FormControlProps, "type">;

export function EmailInput(props: EmailInputProps) {
  return <FormControl type="email" {...props} />;
}
