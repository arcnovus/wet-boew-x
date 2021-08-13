import { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";
import {
  CdtsDefaultTemplate,
  CdtsDefaultTemplateProps,
  CdtsDefaultSecMenuTemplate,
  CdtsDefaultSecMenuTemplateProps,
} from "@arcnovus/wet-boew-react";

// const searchOptions = {
//   Disabled: undefined,
//   LogSearch: console.log,
// };
export default {
  title: "CDTS/Canada.ca theme",
  component: CdtsDefaultTemplate,
} as Meta;

const dateModified = new Date().toLocaleDateString("en-CA");

const Template: Story<PropsWithChildren<CdtsDefaultTemplateProps>> = (
  args: PropsWithChildren<CdtsDefaultTemplateProps>
) => <CdtsDefaultTemplate {...args} />;

export const ContentPage = Template.bind({});
ContentPage.args = {
  title: "Default page",
  dateModified,
  children: (
    <>
      <h1 property="name" id="wb-cont">
        Default page
      </h1>
    </>
  ),
};

const SectionMenuTemplate: Story<typeof CdtsDefaultSecMenuTemplate> = (
  args: CdtsDefaultSecMenuTemplateProps
) => <CdtsDefaultSecMenuTemplate {...args} />;
export const SectionMenu = SectionMenuTemplate.bind({});
SectionMenu.args = {
  title: "Section menu",
  sections: [
    {
      sectionName: "[Topic - Local navigation]",
      menuLinks: [
        {
          href: "./sectionmenu-en.html",
          text: "Section menu",
          subLinks: [
            {
              subhref: "#11a",
              subtext: "Link 1.1 a)",
            },
            {
              subhref: "#11b",
              subtext: "Link 1.1 b)",
            },
            {
              subhref: "#11c",
              subtext: "Opens in a new window",
              newWindow: true,
            },
            {
              subhref: "#11d",
              subtext: "Link 1.1 d)",
            },
          ],
        },
        {
          href: "#",
          text: "Link 2",
        },
        {
          href: "#",
          text: "Opens in a new window",
          newWindow: true,
        },
        {
          href: "#",
          text: "Link 4",
        },
      ],
    },
    {
      sectionName: "Opens in a new window",
      sectionLink: "#",
      newWindow: true,
      menuLinks: [
        {
          href: "#",
          text: "Link 1",
        },
        {
          href: "#",
          text: "Link 2",
        },
        {
          href: "#",
          text: "Link 3",
        },
        {
          href: "#",
          text: "Link 4",
        },
      ],
    },
    {
      // Rinse and repeat
      sectionName: "Section name 3",
      menuLinks: [
        {
          href: "#",
          text: "Link 1",
        },
        {
          href: "#",
          text: "Link 2",
        },
        {
          href: "#",
          text: "Link 3",
        },
        {
          href: "#",
          text: "Link 4",
        },
      ],
    },
    {
      // Rinse and repeat
      sectionName: "Section name ... 27",
      menuLinks: [
        {
          href: "#",
          text: "Link 1",
        },
        {
          href: "#",
          text: "Link 2",
        },
        {
          href: "#",
          text: "Link 3",
        },
        {
          href: "#",
          text: "Link 4",
        },
      ],
    },
  ],
};

export const BreadcrumbsPage = Template.bind({});
BreadcrumbsPage.args = {
  title: "Default page",
  dateModified,
  breadcrumbs: [
    {
      title: "Home",
      href: "https://www.canada.ca/en/index.html",
    },
    {
      title: "CDTS",
      acronym: "Centrally Deployed Templates Solution",
      href: "https://www.canada.ca/en/index.html",
    },
  ],
};

export const ContactLinksPage = Template.bind({});
ContactLinksPage.args = {
  title: "Contact link",
  contactLinks: [
    {
      href:
        "https://www.canada.ca/en/environment-climate-change/corporate/contact.html",
      text: "Link",
    },
  ],
  dateModified,
  children: (
    <p>
      Clicking "Contact Us" in the footer now goes to Environment Canada's
      contact page.
    </p>
  ),
};

export const TransactionalLinksPage = Template.bind({});
TransactionalLinksPage.args = {
  title: "Transactional Page.",
  search: false,
  siteMenu: false,
  showPreContent: false,
  dateModified: "2019-03-08",
  showPostContent: false,
  showFeedback: false,
  showShare: false,
  showFooter: false,
  showFeatures: false,
  breadcrumbs: [
    {
      title: "Exit secure transaction",
      href: "/en/index.html",
    },
  ],
};

export const SharePage = Template.bind({});
SharePage.args = {
  dateModified,
  title: `"Share this page" button`,
  showShare: ["facebook", "linkedin", "twitter", "reddit"],
  children: (
    <p>
      Click the "Share this page" button and notice it is filtered to only
      Facebook, LinkedIn, Twitter, and Reddit.
    </p>
  ),
};

export const ExitScriptPage = Template.bind({});
ExitScriptPage.args = {
  dateModified: "2019-07-31",
  title: "Leaving a secure site",
  exitScript: true,
  displayModal: true,
  exitURL: "./exiturl-en.html",
  exitMsg:
    "This is a custom message. You are about to leave a secure site, do you wish to continue?",
  cancelMsg: "Nope",
  yesMsg: "Sure",
  exitDomains: "developer.mozilla.org, www.esdc.gc.ca, www.jobbank.gc.ca",
};

export const VersionIdentierPage = Template.bind({});
VersionIdentierPage.args = {
  versionIdentifier: "0123456789",
};

export const ScreenIdentierPage = Template.bind({});
ScreenIdentierPage.args = {
  dateModified: "2019-03-08",
  screenIdentifier: "0123456789",
};
