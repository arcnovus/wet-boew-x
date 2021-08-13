export type SearchHandler = (q: string) => void;
export interface SearchElements {
  searchForm: HTMLFormElement | null;
  searchButton: HTMLButtonElement | null;
  searchInput: HTMLInputElement | null;
}

export interface PatchSearchProps {
  clickHandler?: SearchHandler;
  changeHandler?: SearchHandler;
  placeholder?: string;
}
export function patchSearch({
  clickHandler,
  changeHandler,
  placeholder,
}: PatchSearchProps): SearchElements {
  const searchForm: HTMLFormElement = document.getElementsByName(
    "cse-search-box"
  )[0] as HTMLFormElement;
  const searchInput = document.getElementById("wb-srch-q") as HTMLInputElement;
  const searchButton = document.getElementById(
    "wb-srch-sub"
  ) as HTMLButtonElement;

  if (searchForm && searchInput && searchButton && clickHandler) {
    console.log("patching search...");
    console.log("searchInput", searchInput);
    searchForm.action = "#";
    searchForm.onsubmit = (event: Event) => event.preventDefault();
    searchButton.onclick = (e: Event) => {
      e.preventDefault();
      clickHandler(searchInput.value);
    };

    if (placeholder) {
      searchInput.placeholder = placeholder;
    }

    searchInput.onchange = changeHandler
      ? (e: Event) => {
          changeHandler(searchInput.value);
        }
      : () => true;
  }

  return {
    searchForm,
    searchButton,
    searchInput,
  };
}
