import { useEffect } from "react";
import { setDocumentTitle, useCdts } from ".";

export function useDocumentTitle(title?: string) {
  const { appTitle } = useCdts() ?? {};
  useEffect(() => setDocumentTitle({ pageTitle: title, appTitle }), [
    title,
    appTitle,
  ]);
}
