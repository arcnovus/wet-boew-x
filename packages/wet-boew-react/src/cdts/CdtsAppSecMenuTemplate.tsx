import { PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";
import { CdtsPreFooterProps, CdtsPreFooter, useCdts } from ".";
import { registerWetComponent } from "../wet/wet-utils";
import CdtsAppFooter from "./CdtsAppFooter";
import { CdtsAppFooterProps } from "./CdtsAppFooter";
import CdtsAppTop, { CdtsAppTopProps } from "./CdtsAppTop";
import CdtsRefFooter, { CdtsRefFooterProps } from "./CdtsRefFooter";
import CdtsRefTop, { CdtsRefTopProps } from "./CdtsRefTop";
import CdtsSecMenu, { CdtsSecMenuProps } from "./CdtsSecMenu";
import { useCdtsPageTitle } from "./useCdtsPageTitle";

export type CdtsAppSecMenuTemplateProps = PropsWithChildren<
  {
    title?: string;
  } & Omit<CdtsRefTopProps, "isApplication"> &
    CdtsAppTopProps &
    CdtsPreFooterProps &
    CdtsAppFooterProps &
    CdtsRefFooterProps &
    CdtsSecMenuProps
>;

export default function CdtsAppSecMenuTemplate({
  children,
  title,
  ...props
}: CdtsAppSecMenuTemplateProps) {
  useCdtsPageTitle(title);
  const { wetBuilder } = useCdts() ?? {};
  useLayoutEffect(() => {
    console.log("useLayoutEffect", "CdtsAppSecMenuTemplate.");
    if (wetBuilder) {
      registerWetComponent(`#secMenuMain`);
    }
  }, [wetBuilder, registerWetComponent]);

  return (
    <>
      <CdtsRefTop {...props} isApplication={true} />
      <CdtsAppTop {...props} />
      <div className="container">
        <div className="row">
          <main
            id="secMenuMain"
            property="mainContentOfPage"
            resource="#wb-main"
            className="col-md-9 col-md-push-3 wb-prettify"
            typeof="WebPageElement"
          >
            {children}
            <CdtsPreFooter {...props} />
          </main>
          <CdtsSecMenu {...props} />
        </div>
      </div>
      <CdtsAppFooter {...props} />
      <CdtsRefFooter {...props} isApplication={true} />
    </>
  );
}
