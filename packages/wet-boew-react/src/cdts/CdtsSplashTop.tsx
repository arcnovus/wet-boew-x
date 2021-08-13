import { useEffect } from "react";
import { CdtsSplashTopParams, useCdts } from ".";
import { injectCdtsSplashTop } from "./cdts-utils";

export type CdtsSplashTopProps = CdtsSplashTopParams;

export default function CdtsSplashTop(props: CdtsSplashTopProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  useEffect(() => {
    if (wetBuilder && wetBuilder.splashTop) {
      injectCdtsSplashTop({
        builder: wetBuilder,
        options: { ...props, cdnEnv, cdnPath },
      });
    }
  }, [wetBuilder, props, cdnEnv, cdnPath, injectCdtsSplashTop]);

  return <></>;
}
