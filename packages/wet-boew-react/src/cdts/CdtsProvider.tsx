import { PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";
import { LanguagePlacement, useLanguage } from "../language";
import { injectCdtsResources, CdtsVersion, onAnchorClick } from "./cdts-utils";
import { Cdts, CdtsContext } from "./useCdts";
import { CdtsEnvironmentParams, WetBuilder } from ".";

export function CdtsProvider({
  children,
  version,
  linkHandler,
  languagePlacement,
  cdnEnv,
  cdnPath,
}: PropsWithChildren<
  {
    version?: CdtsVersion;
    linkHandler?: (target: HTMLAnchorElement) => void;
    languagePlacement?: LanguagePlacement;
  } & CdtsEnvironmentParams
>) {
  const [cdts, setCdts] = useState<Cdts | null>(null);
  // const [wetBuilder, setWetBuilder] = useState<WetBuilder | null>(null);
  const { currentLanguage: language } = useLanguage({
    placement: languagePlacement ?? LanguagePlacement.PATH,
  });

  console.log({ language });
  useEffect(() => {
    if (linkHandler) {
      onAnchorClick(linkHandler);
    }
  }, [onAnchorClick, linkHandler]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect", "CdtsProvider.");
    injectCdtsResources({ version: version ?? "run", language }).then(
      (builder) => {
        const oCdts = {
          wetBuilder: builder,
          cdnEnv,
          cdnPath,
          languagePlacement,
        };
        setCdts(oCdts);
      }
    );
  }, [languagePlacement, language, cdnEnv, cdnPath, version]);

  return <CdtsContext.Provider value={cdts}>{children}</CdtsContext.Provider>;
}
