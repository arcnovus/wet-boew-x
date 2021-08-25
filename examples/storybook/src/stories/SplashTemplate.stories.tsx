import { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";
import { SplashTemplate, SplashTemplateProps } from "@arcnovus/wet-boew-react";

export default {
  title: "Templates/Bilingual",
  component: SplashTemplate,
} as Meta;

const Template: Story<PropsWithChildren<SplashTemplateProps>> = (
  args: SplashTemplateProps
) => <SplashTemplate {...args} />;

export const SplashPage = Template.bind({});
SplashPage.args = {
  indexEng: "/en/",
  indexFra: "/fr/",
  termsEng: "https://www.canada.ca/en/transparency/terms.html",
  termsFra: "https://www.canada.ca/fr/transparence/avis.html",
  nameEng: "Centrally Deployed Template Solution (CDTS) for React",
  nameFra: "Solution de gabarits à déploiement centralisé (SGDC) pour React",
};
