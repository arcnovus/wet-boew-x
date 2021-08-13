import { useState, useLayoutEffect } from "react";
import { CdtsFooterParams } from ".";
import { useCdts } from "./useCdts";

export type CdtsFooterProps = CdtsFooterParams;
export default function CdtsFooter(props: CdtsFooterProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  const [__html, setHtml] = useState("");
  useLayoutEffect(() => {
    console.log("useLayoutEffect", "CdtsFooter.");
    if (wetBuilder) {
      setHtml(wetBuilder.footer({ ...props, cdnEnv, cdnPath }));
    }
  }, [wetBuilder, props, cdnEnv, cdnPath]);

  return <div id="def-footer" dangerouslySetInnerHTML={{ __html }} />;
}
