import { useLayoutEffect, useState } from "react";
import { useCdts } from "./useCdts";
import { registerWetComponent } from "../wet";
import type { CdtsAppTopParams } from ".";

export type AppTopProps = CdtsAppTopParams;
export function AppTop(props: AppTopProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  const [__html, setHtml] = useState("");
  useLayoutEffect(() => {
    if (wetBuilder) {
      const html = wetBuilder.appTop({
        ...props,
        cdnEnv,
        cdnPath,
      });
      setHtml(html);
      registerWetComponent("#wb-sm");
    }
  });

  return <div id="def-appTop" dangerouslySetInnerHTML={{ __html }} />;
}
