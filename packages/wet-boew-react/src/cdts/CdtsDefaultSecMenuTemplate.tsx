import { PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";
import CdtsTop, { CdtsTopProps } from "./CdtsTop";
import CdtsPreFooter, { CdtsPreFooterProps } from "./CdtsPreFooter";
import CdtsFooter, { CdtsFooterProps } from "./CdtsFooter";
import CdtsRefFooter, { CdtsRefFooterProps } from "./CdtsRefFooter";
import CdtsRefTop, { CdtsRefTopProps } from "./CdtsRefTop";

import { useCdts } from ".";
import CdtsSecMenu, { CdtsSecMenuProps } from "./CdtsSecMenu";
import { useCdtsPageTitle } from "./useCdtsPageTitle";
import { registerWetComponent } from "../wet/wet-utils";

export type CdtsDefaultSecMenuTemplateProps = PropsWithChildren<
  {
    title?: string;
  } & Omit<CdtsRefTopProps, "isApplication"> &
    Omit<CdtsTopProps, "topSecMenu"> &
    CdtsPreFooterProps &
    CdtsFooterProps &
    CdtsRefFooterProps &
    CdtsSecMenuProps
>;

export default function CdtsDefaultSecMenuTemplate({
  children,
  title,
  ...props
}: CdtsDefaultSecMenuTemplateProps) {
  const { wetBuilder } = useCdts() ?? {};
  const [display, setDisplay] = useState("none");
  useCdtsPageTitle(title);
  useLayoutEffect(() => {
    console.log("useLayoutEffect", "CdtsDefaultSecMenuTemplate.");
    if (wetBuilder) {
      setDisplay("block");
      registerWetComponent(`#secMenuMain`);
    }
  }, [wetBuilder, registerWetComponent]);

  return (
    <div style={{ display }}>
      <CdtsRefTop {...props} isApplication={false} />
      <CdtsTop {...props} topSecMenu={true} />
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
      <CdtsFooter {...props} />
      <CdtsRefFooter {...props} isApplication={false} />
    </div>
  );
}
