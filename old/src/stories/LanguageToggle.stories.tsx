import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LanguageToggle from "../components/LanguageToggle";
import Container from "../components/Container";
import { languageCodePlacement } from "../i18n/language-utils";

export default {
  title: "WET-BOEW/Language",
  component: LanguageToggle,
} as ComponentMeta<typeof LanguageToggle>;

const Template: ComponentStory<typeof LanguageToggle> = (args) => (
  <Container variant="fluid">
    <LanguageToggle {...args} />
  </Container>
);

export const ToggleLanguage = Template.bind({});
ToggleLanguage.args = { placement: languageCodePlacement.QUERYSTRING };
