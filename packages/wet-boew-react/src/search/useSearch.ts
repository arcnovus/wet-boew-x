import { useLayoutEffect, useState } from "react";
import { patchSearch, PatchSearchProps, SearchElements } from "./search-utils";

export function useSearch(props: PatchSearchProps) {
  let searchElements = {
    searchButton: null,
    searchInput: null,
    searchForm: null,
  };

  useLayoutEffect(() => {
    patchSearch(props);
  });

  return searchElements;
}
