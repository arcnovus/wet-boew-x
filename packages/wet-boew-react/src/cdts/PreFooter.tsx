import { useState, useLayoutEffect } from "react";
import { CdtsPreFooterParams, useCdts } from ".";
import { useLanguage } from "../language";
import { registerWetComponent } from "../wet";

export type PreFooterProps = CdtsPreFooterParams;

export function PreFooter(props: PreFooterProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  const { currentLanguage } = useLanguage();
  const [__html, setHtml] = useState("");
  useLayoutEffect(() => {
    console.log("useLayoutEffect", "CdtsPreFooter.");
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
