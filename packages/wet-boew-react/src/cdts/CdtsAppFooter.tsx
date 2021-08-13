import { useLayoutEffect, useState } from "react";
import { CdtsAppFooterParams } from ".";
import { useWetComponent } from "../wet";
import { registerWetComponent } from "../wet/wet-utils";
import { useCdts } from "./useCdts";

export type CdtsAppFooterProps = CdtsAppFooterParams;
export default function CdtsAppFooter(props: CdtsAppFooterProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  const [__html, setHtml] = useState("");
  useLayoutEffect(() => {
    console.log("useLayoutEffect", "CdtsAppFooter.");
    if (wetBuilder) {
      setHtml(wetBuilder.appFooter({ ...props, cdnEnv, cdnPath }));
    }
  }, [wetBuilder, props, cdnEnv, cdnPath]);

  return <div dangerouslySetInnerHTML={{ __html }} />;
}
