import { PropsWithChildren } from "react";
import {
  RefTopProps,
  TopProps,
  PreFooterProps,
  FooterProps,
  RefFooterProps,
  RefTop,
  Top,
  PreFooter,
  Footer,
  RefFooter,
} from "..";
import { AfterCdts, useCdts, useDocumentTitle } from "../cdts";
import { useLngLinks } from "../language";
import { Main } from "../layout";

export type DefaultTemplateProps = PropsWithChildren<
  Omit<RefTopProps, "isApplication"> &
    TopProps &
    PreFooterProps &
    FooterProps &
    RefFooterProps
>;

export function DefaultTemplate({
  children,
  lngLinks,
  ...props
}: DefaultTemplateProps) {
  const languageToggle = useLngLinks({ lngLinks });
  return (
    <>
      <RefTop {...props} isApplication={false} />
      <Top {...props} lngLinks={languageToggle.lngLinks} />
      <Main>
        <AfterCdts>{children}</AfterCdts>
        <PreFooter {...props} />
      </Main>
      <Footer {...props} />
      <RefFooter {...props} isApplication={false} />
    </>
  );
}
