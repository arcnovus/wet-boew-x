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

const SEARCH_FORM_NAME = "cse-search-box";
const SEARCH_INPUT_ID = "wb-srch-q";
const SEARCH_BUTTON_ID = "wb-srch-sub";

export function patchSearch({
  clickHandler,
  changeHandler,
  placeholder,
}: PatchSearchProps): SearchElements {
  const searchForm = getSearchForm();
  const searchInput = getSearchInput();
  const searchButton = getSearchButton();

  if (searchForm && searchInput && searchButton && clickHandler) {
    patchForm(searchForm);
    patchButton(searchButton, clickHandler, searchInput);
    patchPlaceholder(placeholder, searchInput);
    handleChanges(searchInput, changeHandler);
  }

  return {
    searchForm,
    searchButton,
    searchInput,
  };
}

function handleChanges(
  searchInput: HTMLInputElement,
  changeHandler: SearchHandler | undefined
) {
  searchInput.onchange = changeHandler
    ? (e: Event) => {
        changeHandler(searchInput.value);
      }
    : () => true;
}

function patchPlaceholder(
  placeholder: string | undefined,
  searchInput: HTMLInputElement
) {
  if (placeholder) {
    searchInput.placeholder = placeholder;
  }
}

function patchButton(
  searchButton: HTMLButtonElement,
  clickHandler: SearchHandler,
  searchInput: HTMLInputElement
) {
  searchButton.onclick = (e: Event) => {
    e.preventDefault();
    clickHandler(searchInput.value);
  };
}

function patchForm(searchForm: HTMLFormElement) {
  searchForm.action = "#";
  searchForm.onsubmit = (event: Event) => event.preventDefault();
}

function getSearchForm(): HTMLFormElement {
  return document.getElementsByName(SEARCH_FORM_NAME)[0] as HTMLFormElement;
}

function getSearchInput() {
  return document.getElementById(SEARCH_INPUT_ID) as HTMLInputElement;
}

function getSearchButton() {
  return document.getElementById(SEARCH_BUTTON_ID) as HTMLButtonElement;
}
