import { setPageTitle } from "./page-meta";
describe("Page Meta Utils", () => {
  it('Defaults the page title to "Canada.ca"', () => {
    const oldTitle = document.title;
    setPageTitle();
    expect(document.title).toBe("Canada.ca");
    document.title = oldTitle;
  });
  it('Prepends the given title to "- Canada.ca"', () => {
    const oldTitle = document.title;
    const title = "Custom page title.";
    const expected = `${title} - Canada.ca`;
    setPageTitle(title);
    expect(document.title).toBe(expected);
    document.title = oldTitle;
  });
});
