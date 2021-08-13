import { PropsWithChildren } from "react";
import Container from "./Container";
import Row from "./Row";

export default function TopBanner({ children }: PropsWithChildren<any>) {
  return (
    <Container id="wb-bnr">
      <Row>{children}</Row>
    </Container>
  );
}
