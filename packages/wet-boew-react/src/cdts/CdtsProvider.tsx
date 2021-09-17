import { PropsWithChildren, useLayoutEffect, useState } from "react";
import {
  Cdts,
  CdtsContext,
  CdtsEnvironmentParams,
  RefTopProps,
  CdtsVersion,
  injectCdtsResources,
  onAnchorClick,
  RefFooterProps,
  RefTop,
  RefFooter,
} from ".";
import { Language, useLanguage } from "../language";

export function CdtsProvider({
  appTitle,
  cdnEnv,
  cdnPath,
  children,
  language,
  linkHandler,
  version,
  ...props
}: PropsWithChildren<
  {
    appTitle?: string;
    language?: Language;
    linkHandler?: (target: HTMLAnchorElement) => void;
    version?: CdtsVersion;
  } & CdtsEnvironmentParams &
    RefTopProps &
    RefFooterProps
>) {
  const [cdts, setCdts] = useState<Cdts | null>(null);
  const { currentLanguage: fallbackLanguage } = useLanguage() ?? {};
  const isBrowserContext = typeof window !== "undefined";
  useLayoutEffect(() => {
    if (linkHandler) {
      onAnchorClick(linkHandler);
    }
    injectCdtsResources({
      version: version ?? "run",
      language: language ?? fallbackLanguage,
    }).then((wetBuilder) => {
      if (wetBuilder) {
        setCdts({
          wetBuilder,
          cdnEnv,
          cdnPath,
          fallbackLanguage: fallbackLanguage ?? Language.EN,
          appTitle: appTitle ?? "Canada.ca",
        });
      }
    });
  }, [
    appTitle,
    cdnEnv,
    cdnPath,
    language,
    linkHandler,
    onAnchorClick,
    version,
    fallbackLanguage,
    isBrowserContext,
    cdts?.wetBuilder,
  ]);

  return (
    <CdtsContext.Provider value={cdts}>
      <RefTop {...props}></RefTop>
      {children}
      <RefFooter {...props}></RefFooter>
    </CdtsContext.Provider>
  );
}
