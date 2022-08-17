import { FormControl, FormControlProps } from "./FormControl";

type TextInputProps = Omit<FormControlProps, "type">;

export function TextInput(props: TextInputProps) {
  return <FormControl type="text" {...props} />;
}
