import { useLayoutEffect, useState } from "react";
import { CdtsSplashParams, useCdts } from ".";

export type CdtsSplashContentProps = CdtsSplashParams;

export default function CdtsSplashContent(props: CdtsSplashContentProps) {
  const [__html, setHtml] = useState("");
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  useLayoutEffect(() => {
    console.log("useLayoutEffect", "CdtsSplashContent");
    if (wetBuilder && wetBuilder.splash) {
      const html = wetBuilder.splash({ ...props, cdnEnv, cdnPath });
      document.body.classList.add("splash");
      setHtml(html);
    }
  }, [wetBuilder, props, cdnEnv, cdnPath]);

  return <div id="splashContent" dangerouslySetInnerHTML={{ __html }} />;
}
