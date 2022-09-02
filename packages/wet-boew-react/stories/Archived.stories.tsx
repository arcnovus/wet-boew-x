import { Story, Meta } from "@storybook/react";
import { Archived, Container, Language, Main } from "../src";
import type { ArchivedProps } from "../src";
import React from "react";

export default {
  title: "Components/Archived",
  component: Archived,
  name: "Archived",
  argTypes: {
    replacedBy: {
      control: "object",
      mapping: {
        title: { type: "string" },
        href: { type: "string" },
      },
    },
  },
} as Meta;

const Template = (args: ArchivedProps) => (
  <Main>
    <Container>
      <Archived {...args} />
    </Container>
  </Main>
);

export const ArchivedEnglish: Story<ArchivedProps> = Template.bind({});
ArchivedEnglish.args = {
  language: Language.EN,
};

export const ArchivedFrench: Story<ArchivedProps> = Template.bind({});
ArchivedFrench.args = {
  language: Language.FR,
};

export const ReplacedBy: Story<ArchivedProps> = Template.bind({});
ReplacedBy.args = {
  language: Language.EN,
  replacedBy: {
    title: "The Standard on Web Usability",
    href: "https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=24227",
  },
};
