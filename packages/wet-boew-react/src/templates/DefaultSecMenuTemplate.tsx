import { PropsWithChildren, useState, useLayoutEffect } from "react";
import {
  RefTopProps,
  TopProps,
  PreFooterProps,
  FooterProps,
  RefFooterProps,
  SecMenuProps,
  RefTop,
  Top,
  PreFooter,
  SecMenu,
  Footer,
  RefFooter,
} from "..";
import { AfterCdts, useCdts } from "../cdts";
import { Container, Row } from "../grids";
import { useLngLinks } from "../language";
import { Main } from "../layout";
import { registerWetComponent } from "../wet";

export type DefaultSecMenuTemplateProps = PropsWithChildren<
  Omit<RefTopProps, "isApplication"> &
    Omit<TopProps, "topSecMenu"> &
    PreFooterProps &
    FooterProps &
    RefFooterProps &
    SecMenuProps
>;

export function DefaultSecMenuTemplate({
  children,
  lngLinks,
  ...props
}: DefaultSecMenuTemplateProps) {
  const { wetBuilder } = useCdts() ?? {};
  const [display, setDisplay] = useState("none");
  const languageToggle = useLngLinks({ lngLinks });
  useLayoutEffect(() => {
    if (wetBuilder) {
      setDisplay("block");
      registerWetComponent(`#secMenuMain`);
    }
  });

  return (
    <div style={{ display }}>
      <RefTop {...props} isApplication={false} />
      <Top {...props} topSecMenu={true} lngLinks={languageToggle.lngLinks} />
      <Container>
        <Row>
          <Main id="secMenuMain" md={9} mdpush={3} className="wb-prettify">
            <AfterCdts>{children}</AfterCdts>
            <PreFooter {...props} />
          </Main>
          <SecMenu {...props} />
        </Row>
      </Container>
      <Footer {...props} />
      <RefFooter {...props} isApplication={false} />
    </div>
  );
}
