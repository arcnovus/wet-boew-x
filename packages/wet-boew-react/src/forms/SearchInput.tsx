import { forwardRef } from "react";
import { FormControl, FormControlProps } from "./FormControl";

export type SearchInputProps = Omit<FormControlProps, "type">;

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props: SearchInputProps, ref) => (
    <FormControl ref={ref} type="search" {...props} />
  )
);
