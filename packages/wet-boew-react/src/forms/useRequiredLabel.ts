import { Language } from "@arcnovus/wet-boew-utils";

export function useRequiredLabel({ language }: { language?: Language | null }) {
  if (language === Language.FR) {
    return "(obligatoire)";
  }
  if (language === Language.EN) {
    return "(required)";
  }
  console.warn(
    "Unable to determine language from URL, using '*' only to denote required fields."
  );
  return "";
}
