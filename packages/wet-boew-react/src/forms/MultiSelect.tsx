import { forwardRef, PropsWithChildren } from "react";
import { SelectProps, Select } from "./Select";

export const MultiSelect = forwardRef<
  HTMLSelectElement,
  PropsWithChildren<SelectProps>
>(({ ...props }, ref) => <Select ref={ref} {...props} multiple />);
