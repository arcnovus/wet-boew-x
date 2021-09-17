import { useEffect } from "react";
import { CdtsRefTopParams, injectCdtsRefTop, useCdts } from ".";

export type RefTopProps = CdtsRefTopParams;

export function RefTop(props: RefTopProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};

  // WARNING: Do NOT change this to useLayoutEffect, bad things will happen.
  useEffect(() => {
    if (wetBuilder) {
      injectCdtsRefTop({
        builder: wetBuilder,
        options: { ...props, cdnEnv, cdnPath },
      });
    }
  });

  return <></>;
}
