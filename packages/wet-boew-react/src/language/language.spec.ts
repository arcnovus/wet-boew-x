import {
  getLanguageFromUrl,
  Language,
  LanguagePlacement,
  translateUrl,
} from "./language";

describe("Get language from URL", () => {
  it("works for english paths", () => {
    const urlEn = new URL("https://canada.ca/en/abc");
    expect(getLanguageFromUrl(urlEn)).toBe(Language.EN);
    expect(
      getLanguageFromUrl(urlEn, { placement: LanguagePlacement.PATH })
    ).toBe(Language.EN);
  });
  it("works for french paths", () => {
    const urlFr = new URL("https://canada.ca/fr");
    expect(getLanguageFromUrl(urlFr)).toBe(Language.FR);
  });
  it("returns null when there is no recognizable language in the path", () => {
    const urlUnknown = new URL("https://canada.ca/dksfj/asdkfhajksd");
    expect(getLanguageFromUrl(urlUnknown)).toBe(null);
  });
  it("ignores language in the querystring when placement is explicitly set to path", () => {
    const urlQs = new URL("https://canada.ca/dksfj?lang=en");
    expect(
      getLanguageFromUrl(urlQs, {
        placement: LanguagePlacement.PATH,
      })
    ).toBe(null);
  });
  it("works for english query strings", () => {
    const urlEn = new URL("https://canada.ca?lang=en");
    expect(getLanguageFromUrl(urlEn)).toBe(Language.EN);
  });
  it("works for french query strings", () => {
    const urlFr = new URL("https://canada.ca?a=b&lang=fr");
    expect(getLanguageFromUrl(urlFr)).toBe(Language.FR);
  });
  it("returns null when there is no recognizable language in the querystring", () => {
    const urlUnknown = new URL("https://canada.ca/dksfj/?lang=khjfkjahs");
    expect(getLanguageFromUrl(urlUnknown)).toBe(null);
  });
  it("ignores language in the path when placement is explicitly set to querystring", () => {
    const urlLangPath = new URL("https://canada.ca/en");
    expect(
      getLanguageFromUrl(urlLangPath, {
        placement: LanguagePlacement.QUERYSTRING,
      })
    ).toBe(null);
  });
  it("uses a fallback language when supplied", () => {
    const urlUnknown = new URL("https://canada.ca/");
    expect(getLanguageFromUrl(urlUnknown, { fallback: Language.EN })).toBe(
      Language.EN
    );
  });
  it.todo("works with custom base paths.");
});

describe("Translate URL", () => {
  it("translates from english to french using the path", () => {
    const urlEn = new URL("https://canada.ca/en/aksjlsdjklfh");
    const urlFr = new URL("https://canada.ca/fr/aksjlsdjklfh");
    const options = {
      toLanguage: Language.FR,
      placement: LanguagePlacement.PATH,
    };
    expect(translateUrl(urlEn, options)).toEqual(urlFr);
  });
  it("translates from french to english using the query string", () => {
    const urlEn = new URL("https://canada.ca/aksjlsdjklfh?a=n&lang=en");
    const urlFr = new URL("https://canada.ca/aksjlsdjklfh?a=n&lang=fr");
    const options = {
      toLanguage: Language.EN,
      placement: LanguagePlacement.QUERYSTRING,
    };
    expect(translateUrl(urlFr, options)).toEqual(urlEn);
  });
  it("translates non-lingual paths", () => {
    const url = new URL("https://canada.ca/aksjlsdjklfh");
    const urlFr = new URL("https://canada.ca/fr/aksjlsdjklfh");
    const options = {
      toLanguage: Language.FR,
      placement: LanguagePlacement.PATH,
    };
    expect(translateUrl(url, options)).toEqual(urlFr);
  });
  it("translates non-lingual query strings", () => {
    const url = new URL("https://canada.ca/aksjlsdjklfh?a=b");
    const urlFr = new URL("https://canada.ca/aksjlsdjklfh?a=b&lang=fr");
    const options = {
      toLanguage: Language.FR,
      placement: LanguagePlacement.QUERYSTRING,
    };
    expect(translateUrl(url, options)).toEqual(urlFr);
  });
  it.todo("works with custom base paths.");
});
