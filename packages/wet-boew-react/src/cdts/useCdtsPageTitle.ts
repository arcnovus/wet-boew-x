import { useEffect } from "react";
import { setPageTitle } from "./cdts-utils";

export function useCdtsPageTitle(title?: string) {
  useEffect(() => setPageTitle(title), [title]);
}
