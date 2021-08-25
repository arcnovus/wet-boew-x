import { PropsWithChildren } from "react";
import {
  RefTopProps,
  AppTopProps,
  PreFooterProps,
  AppFooterProps,
  RefFooterProps,
  SecMenuProps,
  RefFooter,
  AppFooter,
  AppTop,
  PreFooter,
  RefTop,
  SecMenu,
  AfterCdts,
} from "../cdts";
import { Container, Row } from "../grids";
import { useLngLinks } from "../language";
import { Main } from "../layout";

import { useWetComponent } from "../wet";

export type AppSecMenuTemplateProps = PropsWithChildren<
  Omit<RefTopProps, "isApplication"> &
    Omit<AppTopProps, "topSecMenu"> &
    PreFooterProps &
    AppFooterProps &
    RefFooterProps &
    SecMenuProps
>;

export function AppSecMenuTemplate({
  children,
  lngLinks,
  ...props
}: AppSecMenuTemplateProps) {
  useWetComponent(`#secMenuMainApp`);
  const languageToggle = useLngLinks({ lngLinks });
  return (
    <>
      <RefTop {...props} isApplication={true} />
      <AppTop {...props} topSecMenu={true} lngLinks={languageToggle.lngLinks} />
      <Container>
        <Row>
          <Main id="secMenuMainApp" md={9} mdpush={3} className="wb-prettify">
            <AfterCdts>{children}</AfterCdts>
            <PreFooter {...props} />
          </Main>
          <SecMenu {...props} />
        </Row>
      </Container>
      <AppFooter {...props} />
      <RefFooter {...props} isApplication={true} />
    </>
  );
}
