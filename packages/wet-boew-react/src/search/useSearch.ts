import { useLayoutEffect } from "react";
import {
  patchSearch,
  PatchSearchProps,
  SearchElements,
} from "@arcnovus/wet-boew-utils";

export function useSearch(props: PatchSearchProps): SearchElements {
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
