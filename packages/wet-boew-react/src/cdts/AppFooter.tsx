import { useLayoutEffect, useState } from "react";
import { CdtsAppFooterParams } from ".";

import { useCdts } from "./useCdts";

export type AppFooterProps = CdtsAppFooterParams;
export function AppFooter(props: AppFooterProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  const [__html, setHtml] = useState("");
  useLayoutEffect(() => {
    if (wetBuilder) {
      setHtml(wetBuilder.appFooter({ ...props, cdnEnv, cdnPath }));
    }
  });

  return <div dangerouslySetInnerHTML={{ __html }} />;
}
