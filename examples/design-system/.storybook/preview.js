import { CdtsProvider, LanguagePlacement } from "@arcnovus/wet-boew-react";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <CdtsProvider
      version="run" // currently supported: "run", 4.0.39, 4.0.32
      languagePlacement={LanguagePlacement.QUERYSTRING}
      linkHandler={storybookLinkHanlder}
    >
      <Story />
    </CdtsProvider>
  ),
];

function storybookLinkHanlder(a) {
  if (a.href.endsWith("/en/")) {
    return (window.location.href =
      "/iframe.html?id=cdts-canada-ca-theme--content-page&viewMode=story&lang=en");
  }

  if (a.href.endsWith("/fr/")) {
    return (window.location.href =
      "/iframe.html?id=cdts-canada-ca-theme--content-page&viewMode=story&lang=fr");
  }

  if (a.href.startsWith("http")) {
    const targetUrl = new URL(a.href);
    const currentUrl = new URL(window.location.href);
    if (targetUrl.hostname !== currentUrl.hostname) {
      return (top.location.href = targetUrl.href);
    }
  }

  return (window.location.href = a.href);
}
