import { useState, useLayoutEffect } from "react";
import { CdtsFooterParams, useCdts } from ".";

export type FooterProps = CdtsFooterParams;
export function Footer(props: FooterProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  const [__html, setHtml] = useState("");
  useLayoutEffect(() => {
    if (wetBuilder) {
      setHtml(wetBuilder.footer({ ...props, cdnEnv, cdnPath }));
    }
  });

  return <div id="def-footer" dangerouslySetInnerHTML={{ __html }} />;
}
