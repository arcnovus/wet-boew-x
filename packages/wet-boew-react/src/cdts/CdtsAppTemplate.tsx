import { PropsWithChildren, useEffect } from "react";
import { CdtsPreFooterProps, CdtsPreFooter } from ".";
import CdtsAppFooter from "./CdtsAppFooter";
import { CdtsAppFooterProps } from "./CdtsAppFooter";
import CdtsAppTop, { CdtsAppTopProps } from "./CdtsAppTop";
import CdtsRefFooter, { CdtsRefFooterProps } from "./CdtsRefFooter";
import CdtsRefTop, { CdtsRefTopProps } from "./CdtsRefTop";
import { useCdtsPageTitle } from "./useCdtsPageTitle";

export type CdtsAppTemplateProps = PropsWithChildren<
  {
    title?: string;
  } & Omit<CdtsRefTopProps, "isApplication"> &
    CdtsAppTopProps &
    CdtsPreFooterProps &
    CdtsAppFooterProps &
    CdtsRefFooterProps
>;

export default function CdtsAppTemplate({
  children,
  title,
  ...props
}: CdtsAppTemplateProps) {
  useCdtsPageTitle(title);

  return (
    <>
      <CdtsRefTop {...props} isApplication={true} />
      <CdtsAppTop {...props} />
      <main
        property="mainContentOfPage"
        resource="#wb-main"
        className="container"
        typeof="WebPageElement"
      >
        {children}
        <CdtsPreFooter {...props} />
      </main>
      <CdtsAppFooter {...props} />
      <CdtsRefFooter {...props} isApplication={true} />
    </>
  );
}
