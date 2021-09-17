import { useState, useLayoutEffect } from "react";
import { CdtsSecMenuParams, useCdts } from ".";
import { Nav } from "../layout";
import { registerWetComponent } from "../wet";

export type SecMenuProps = CdtsSecMenuParams;

export function SecMenu(props: SecMenuProps) {
  const [__html, setHtml] = useState("");
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  useLayoutEffect(() => {
    if (wetBuilder && wetBuilder.secmenu) {
      const html = wetBuilder.secmenu({ ...props, cdnEnv, cdnPath });
      setHtml(html);
      registerWetComponent("#wb-sec");
    }
  });

  return (
    <Nav
      md={3}
      mdpull={9}
      className="wb-sec"
      id="wb-sec"
      dangerouslySetInnerHTML={{ __html }}
    ></Nav>
  );
}
