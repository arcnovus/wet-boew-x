import { FormControl, FormControlProps } from "./FormControl";

type TelInputProps = Omit<FormControlProps, "type">;

export function TelInput(props: TelInputProps) {
  return <FormControl type="tel" {...props} />;
}
