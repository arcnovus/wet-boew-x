import { useState, useLayoutEffect } from "react";
import { CdtsPreFooterParams } from ".";
import { registerWetComponent } from "../wet/wet-utils";
import { useCdts } from "./useCdts";

export type CdtsPreFooterProps = CdtsPreFooterParams;

export default function CdtsPreFooter(props: CdtsPreFooterProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
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
  }, [wetBuilder, props, cdnEnv, cdnPath, registerWetComponent]);

  return <div id="def-preFooter" dangerouslySetInnerHTML={{ __html }} />;
}
