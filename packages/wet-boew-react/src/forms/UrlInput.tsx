import { FormControl, FormControlProps } from "./FormControl";

type UrlInputProps = Omit<FormControlProps, "type">;

export function UrlInput(props: UrlInputProps) {
  return <FormControl type="url" {...props} />;
}
