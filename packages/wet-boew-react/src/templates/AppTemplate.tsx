import { PropsWithChildren, useLayoutEffect, useMemo, useState } from "react";
import {
  RefTop,
  AppTop,
  PreFooter,
  AppFooter,
  RefFooter,
  useLanguage,
} from "..";
import { computeLngLinks } from "@arcnovus/wet-boew-utils";
import {
  AfterCdts,
  AppFooterProps,
  AppTopProps,
  PreFooterProps,
  RefFooterProps,
  RefTopProps,
} from "../cdts";
import { Main } from "../layout";
import { useLngLinks } from "../language";

export type AppTemplateProps = PropsWithChildren<
  Omit<RefTopProps, "isApplication"> &
    AppTopProps &
    PreFooterProps &
    AppFooterProps &
    RefFooterProps
>;

export function AppTemplate({
  children,
  lngLinks,
  ...props
}: AppTemplateProps) {
  const languageToggle = useLngLinks({ lngLinks });

  return (
    <>
      <RefTop {...props} isApplication={true} />
      <AppTop {...props} lngLinks={languageToggle.lngLinks} />
      <Main>
        <AfterCdts>{children}</AfterCdts>
        <PreFooter {...props} />
      </Main>
      <AppFooter {...props} />
      <RefFooter {...props} isApplication={true} />
    </>
  );
}
