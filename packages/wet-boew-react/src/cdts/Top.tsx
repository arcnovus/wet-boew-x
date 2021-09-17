import { useLayoutEffect, useState } from "react";
import { CdtsTopParams, useCdts } from "../cdts";
import { SearchHandler, useSearch } from "../search";
import { useWetComponent } from "../wet";

export interface TopProps extends CdtsTopParams {
  onSearchChange?: SearchHandler;
  onSearchClick?: SearchHandler;
  searchPlaceholder?: string;
}

export function Top({
  lngLinks,
  onSearchClick,
  onSearchChange,
  searchPlaceholder,
  ...props
}: TopProps) {
  const { wetBuilder, cdnEnv, cdnPath } = useCdts() ?? {};
  const [__html, setHtml] = useState("");
  useSearch({
    clickHandler: onSearchClick,
    changeHandler: onSearchChange,
    placeholder: searchPlaceholder,
  });

  useLayoutEffect(() => {
    if (wetBuilder) {
      const html = wetBuilder.top({
        ...props,
        cdnEnv,
        cdnPath,
        lngLinks,
      });
      setHtml(html);
    }
  });
  useWetComponent(".gcweb-menu");
  useWetComponent(`[data-ajax-replace*="sitemenu"]`);
  return <div id="def-top" dangerouslySetInnerHTML={{ __html }} />;
}
