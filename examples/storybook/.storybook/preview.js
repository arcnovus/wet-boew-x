import { WetProvider } from "@arcnovus/wet-boew-react";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Instructions",
        [
          "Introduction",
          "Getting Started",
          "Bilingual Support",
          "Routing",
          "Typescript Support",
        ],
        "Templates",
        ["Bilingual", "Canada.ca theme", "Application Templates"],
        "Components",
        ["PageTitle", "Headings", "Alerts", "Tables", "DataTables"],
      ],
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <WetProvider
        version="run" // currently supported: "run", 4.0.39, 4.0.32
        linkHandler={storybookLinkHanlder}
      >
        <Story />
      </WetProvider>
    );
  },
];

function storybookLinkHanlder(a) {
  if (a.href.endsWith("/en/")) {
    return (window.location.href =
      "/iframe.html?id=templates-canada-ca-theme--content-page&viewMode=story&lang=en");
  }

  if (a.href.endsWith("/fr/")) {
    return (window.location.href =
      "/iframe.html?id=templates-canada-ca-theme--content-page&viewMode=story&lang=fr");
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
