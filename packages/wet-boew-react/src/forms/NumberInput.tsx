import { FormControl, FormControlProps } from "./FormControl";

type NumberInputProps = Omit<FormControlProps, "type">;

export function NumberInput(props: NumberInputProps) {
  return <FormControl type="number" {...props} />;
}
