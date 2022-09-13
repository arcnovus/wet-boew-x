import { FormControl, FormControlProps } from "./FormControl";

export type TelInputProps = Omit<FormControlProps, "type">;

export function TelInput(props: TelInputProps) {
  return <FormControl type="tel" {...props} />;
}
