import { PropsWithChildren, useEffect, useState } from "react";
import CdtsTop, { CdtsTopProps } from "./CdtsTop";
import CdtsPreFooter, { CdtsPreFooterProps } from "./CdtsPreFooter";
import CdtsFooter, { CdtsFooterProps } from "./CdtsFooter";
import CdtsRefFooter, { CdtsRefFooterProps } from "./CdtsRefFooter";
import CdtsRefTop, { CdtsRefTopProps } from "./CdtsRefTop";

import { useCdts } from ".";
import { useCdtsPageTitle } from "./useCdtsPageTitle";

export type CdtsDefaultTemplateProps = {
  title?: string;
} & Omit<CdtsRefTopProps, "isApplication"> &
  CdtsTopProps &
  CdtsPreFooterProps &
  CdtsFooterProps &
  CdtsRefFooterProps;

export default function CdtsDefaultTemplate({
  children,
  title,
  ...props
}: PropsWithChildren<CdtsDefaultTemplateProps>) {
  useCdtsPageTitle(title);

  return (
    <>
      <CdtsRefTop {...props} isApplication={false} />
      <CdtsTop {...props} />
      <main
        property="mainContentOfPage"
        resource="#wb-main"
        className="container"
        typeof="WebPageElement"
      >
        {children}
        <CdtsPreFooter {...props} />
      </main>
      <CdtsFooter {...props} />
      <CdtsRefFooter {...props} isApplication={false} />
    </>
  );
}
