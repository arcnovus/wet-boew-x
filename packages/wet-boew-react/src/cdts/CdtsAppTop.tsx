import { useLayoutEffect, useState } from "react";
import { CdtsAppTopParams, useCdts } from ".";
import { LanguagePlacement, useLanguage } from "../language";
import { registerWetComponent } from "../wet/wet-utils";
import { computeLngLinks } from "./cdts-utils";

export type CdtsAppTopProps = CdtsAppTopParams;
export default function CdtsAppTop({ lngLinks, ...props }: CdtsAppTopProps) {
  const { wetBuilder, cdnEnv, cdnPath, languagePlacement } = useCdts() ?? {};
  const [__html, setHtml] = useState("");

  useLayoutEffect(() => {
    console.log("useLayoutEffect", "CdtsAppTop");
    if (wetBuilder) {
      const html = wetBuilder.appTop({
        ...props,
        cdnEnv,
        cdnPath,
        lngLinks: lngLinks ?? computeLngLinks({ languagePlacement }),
      });
      setHtml(html);
      registerWetComponent("#wb-sm");
    }
  }, [wetBuilder, props, lngLinks, cdnEnv, cdnPath, languagePlacement]);

  return <div id="def-top" dangerouslySetInnerHTML={{ __html }} />;
}
