import { useCdts } from "./useCdts";
import { SearchHandler, useSearch } from "../search";
import { computeLngLinks } from "./cdts-utils";
import { CdtsTopParams } from ".";
import { useLayoutEffect, useState } from "react";
import { registerWetComponent } from "../wet/wet-utils";

export interface CdtsTopProps extends CdtsTopParams {
  onSearchChange?: SearchHandler;
  onSearchClick?: SearchHandler;
  searchPlaceholder?: string;
}

export default function CdtsTop({
  lngLinks,
  onSearchClick,
  onSearchChange,
  searchPlaceholder,
  ...props
}: CdtsTopProps) {
  const { wetBuilder, cdnEnv, cdnPath, languagePlacement } = useCdts() ?? {};
  const [__html, setHtml] = useState("");
  useSearch({
    clickHandler: onSearchClick,
    changeHandler: onSearchChange,
    placeholder: searchPlaceholder,
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect", "CdtsTop");
    if (wetBuilder) {
      const html = wetBuilder.top({
        ...props,
        cdnEnv,
        cdnPath,
        lngLinks: lngLinks ?? computeLngLinks({ languagePlacement }),
      });
      setHtml(html);
      if (props.siteMenu !== false) {
        registerWetComponent(".gcweb-menu");
        registerWetComponent(`[data-ajax-replace*="sitemenu"]`);
      }
    }
  }, [
    wetBuilder,
    props,
    cdnEnv,
    cdnPath,
    lngLinks,
    registerWetComponent,
    computeLngLinks,
  ]);

  return <div id="def-top" dangerouslySetInnerHTML={{ __html }} />;
}
