import { useMemo } from "react";
import {
  getCurrentLanguage,
  Language,
  setLanguage,
} from "@arcnovus/wet-boew-utils";
export { Language };

export function useLanguage({
  pathname,
  search,
}: {
  pathname?: string;
  search?: string;
} = {}) {
  const language = getCurrentLanguage({ pathname, search });
  if (language) {
    setLanguage({ language });
  }
  return { currentLanguage: language };
}
