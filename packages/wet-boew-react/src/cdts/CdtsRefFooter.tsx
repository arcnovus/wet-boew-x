import { useEffect } from "react";
import { CdtsRefFooterParams } from ".";
import { useCdts } from "./useCdts";
import { injectCdtsRefFooter } from "./cdts-utils";
import { registerWetComponent } from "../wet/wet-utils";

export type CdtsRefFooterProps = CdtsRefFooterParams;
export default function CdtsRefFooter(props: CdtsRefFooterProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  useEffect(() => {
    console.log("useEffect", "CdtsRefFooter");
    if (wetBuilder) {
      injectCdtsRefFooter({
        builder: wetBuilder,
        options: { ...props, cdnEnv, cdnPath },
      });
      if (props.exitScript) {
        console.log("exit script");
        registerWetComponent(".wb-exitscript");
      }
    }
  });

  return <></>;
}
