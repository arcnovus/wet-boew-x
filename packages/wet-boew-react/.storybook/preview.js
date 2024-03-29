import { WetProvider } from "../src";
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
        [
          "Alerts",
          "Archived",
          "Badges",
          "Buttons",
          "DataTables",
          "Forms",
          "Headings",
          "PageTitle",
          "Panels",
          "Tables",
        ],
      ],
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <WetProvider
        version="rn" // currently supported: "run", 4.0.39, 4.0.32
        linkHandler={storybookLinkHanlder}
      >
        <Story />
      </WetProvider>
    );
  },
];

// keep internal links inside the frame.
function storybookLinkHanlder(a) {
  window.location.href = a.href;
}
