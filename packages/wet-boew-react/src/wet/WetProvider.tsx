import { PropsWithChildren } from "react";
import { LanguagePlacement } from "..";
import { CdtsEnvironmentParams, CdtsProvider } from "../cdts";
import { CdtsVersion } from "../cdts/cdts-utils";

export type WetProviderProps = PropsWithChildren<
  {
    cdtsVersion: CdtsVersion;
    linkHandler: (target: HTMLAnchorElement) => void;
    languagePlacement?: LanguagePlacement;
  } & CdtsEnvironmentParams
>;

export default function WetProvider({
  children,
  cdtsVersion,
  ...props
}: WetProviderProps) {
  return (
    <CdtsProvider {...props} version={cdtsVersion}>
      {children}
    </CdtsProvider>
  );
}
