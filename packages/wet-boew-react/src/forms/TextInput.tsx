import { FormControl, FormControlProps } from "./FormControl";

export type TextInputProps = Omit<FormControlProps, "type">;

export function TextInput(props: TextInputProps) {
  return <FormControl type="text" {...props} />;
}
