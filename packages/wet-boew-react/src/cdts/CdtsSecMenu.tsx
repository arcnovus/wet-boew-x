import { useState, useLayoutEffect } from "react";
import { CdtsSecMenuParams, useCdts } from ".";
import { registerWetComponent } from "../wet/wet-utils";

export type CdtsSecMenuProps = CdtsSecMenuParams;

export default function CdtsSecMenu(props: CdtsSecMenuProps) {
  const [__html, setHtml] = useState("");
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  useLayoutEffect(() => {
    console.log("useLayoutEffect", "CdtsSecMenu");
    if (wetBuilder && wetBuilder.secmenu) {
      const html = wetBuilder.secmenu({ ...props, cdnEnv, cdnPath });
      setHtml(html);
      registerWetComponent("#wb-sec");
    }
  }, [wetBuilder, props, cdnEnv, cdnPath, registerWetComponent]);

  return (
    <nav
      className="wb-sec col-md-3 col-md-pull-9"
      typeof="SiteNavigationElement"
      id="wb-sec"
      role="navigation"
      dangerouslySetInnerHTML={{ __html }}
    ></nav>
  );
}
