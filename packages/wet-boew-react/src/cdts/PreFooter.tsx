import { useState, useLayoutEffect } from "react";
import { CdtsPreFooterParams, useCdts } from ".";
import { registerWetComponent } from "../wet";

export type PreFooterProps = CdtsPreFooterParams;

export function PreFooter(props: PreFooterProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  const [__html, setHtml] = useState("");
  useLayoutEffect(() => {
    if (wetBuilder) {
      setHtml(wetBuilder.preFooter({ ...props, cdnEnv, cdnPath }));
      if (props.showShare !== false) {
        registerWetComponent(".wb-share");
        registerWetComponent(".shr-opn");
      }
    }
  });

  return <div id="def-preFooter" dangerouslySetInnerHTML={{ __html }} />;
}
PreFooter.displayName = "PreFooter";
