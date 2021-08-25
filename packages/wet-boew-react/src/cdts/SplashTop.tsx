import { useEffect } from "react";
import { CdtsSplashTopParams, injectCdtsSplashTop, useCdts } from ".";

export type SplashTopProps = CdtsSplashTopParams;

export function SplashTop(props: SplashTopProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  useEffect(() => {
    if (wetBuilder && wetBuilder.splashTop) {
      injectCdtsSplashTop({
        builder: wetBuilder,
        options: { ...props, cdnEnv, cdnPath },
      });
    }
  });

  return <></>;
}
