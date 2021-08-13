import { useEffect } from "react";
import { CdtsRefTopParams } from ".";
import { injectCdtsRefTop } from "./cdts-utils";
import { useCdts } from "./useCdts";

export type CdtsRefTopProps = CdtsRefTopParams;

export default function CdtsRefTop(props: CdtsRefTopProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  useEffect(() => {
    console.log("useEffect", "CdtsRefTop");
    if (wetBuilder) {
      injectCdtsRefTop({
        builder: wetBuilder,
        options: { ...props, cdnEnv, cdnPath },
      });
    }
  }, [wetBuilder, props, cdnEnv, cdnPath, injectCdtsRefTop]);

  return <></>;
}
