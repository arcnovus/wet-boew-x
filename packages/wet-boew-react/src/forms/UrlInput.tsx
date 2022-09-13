import { FormControl, FormControlProps } from "./FormControl";

export type UrlInputProps = Omit<FormControlProps, "type">;

export function UrlInput(props: UrlInputProps) {
  return <FormControl type="url" {...props} />;
}
