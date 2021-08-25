import { useLayoutEffect, useState } from "react";
import { AfterCdts, CdtsSplashParams, useCdts } from ".";
import { inBrowser } from "@arcnovus/wet-boew-utils";
export type SplashContentProps = Partial<CdtsSplashParams>;

export function SplashContent(props: SplashContentProps) {
  const [__html, setHtml] = useState("");
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  // TODO: Move to utils
  const indexEng = props.indexEng ?? "/en/";

  const indexFra = props.indexFra ?? "/fr/";

  const termsEng =
    props.termsEng ?? "https://www.canada.ca/en/transparency/terms.html";

  const termsFra =
    props.termsFra ?? "https://www.canada.ca/fr/transparence/avis.html";

  useLayoutEffect(() => {
    console.log("useEffect", "CdtsSplashContent");
    console.log("wetBuilder", wetBuilder);
    console.log("window.wet", (window as any)?.wet);
    if (wetBuilder && wetBuilder.splash) {
      const html = wetBuilder.splash({
        ...props,
        indexEng,
        indexFra,
        termsEng,
        termsFra,
        cdnEnv,
        cdnPath,
      });
      setHtml(html);
    }
    if (inBrowser()) {
      document.body.classList.add("splash");
    }
  });

  return <div id="splashContent" dangerouslySetInnerHTML={{ __html }} />;
}
