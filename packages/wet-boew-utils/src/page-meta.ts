/**
 * Sets the window.document title to the given value and adds "- Canada.ca"
 * to the end. If no value is provided, it will set the title to "Canada.ca"
 *
 * @export
 * @param {string} [title] The desired title for the current view.
 */
export function setPageTitle(title?: string) {
  document.title = (title ? `${title} - ` : "") + "Canada.ca";
}
