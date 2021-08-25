import { computeLngLinks, Href, Language } from "@arcnovus/wet-boew-utils";
import { useMemo } from "react";

export function useLngLinks(props?: {
  currentLanguage?: Language | null;
  translatedPage?: Href;
  lngLinks?: ReturnType<typeof computeLngLinks>;
}) {
  const lngLinks = props?.lngLinks ?? computeLngLinks(props);
  return { lngLinks };
}
