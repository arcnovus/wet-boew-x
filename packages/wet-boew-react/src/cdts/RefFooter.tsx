import { useEffect } from "react";
import { CdtsRefFooterParams, useCdts, injectCdtsRefFooter } from ".";

export type RefFooterProps = CdtsRefFooterParams;
export function RefFooter(props: RefFooterProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};

  // WARNING: Do NOT change this to useLayoutEffect, bad things will happen.
  useEffect(() => {
    if (wetBuilder) {
      injectCdtsRefFooter({
        builder: wetBuilder,
        options: { ...props, cdnEnv, cdnPath },
      });
    }
  });

  return <></>;
}
