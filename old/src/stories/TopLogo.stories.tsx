import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TopLogo from "../components/TopLogo";
import Row from "../components/Row";
import Container from "../components/Container";
import Main from "../components/Main";

export default {
  title: "WET-BOEW/Logo",
  component: TopLogo,
} as ComponentMeta<typeof TopLogo>;

const Template: ComponentStory<typeof TopLogo> = (args) => (
  <Container variant="fluid">
    <Row>
      <TopLogo {...args} />
    </Row>
  </Container>
);

export const HeaderLogo = Template.bind({});
HeaderLogo.args = { language: "en" };
