import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  Column,
  Container,
  PanelDanger,
  PanelDefault,
  PanelInfo,
  Main,
  Panel,
  PanelPaddedContent,
  PanelPrimary,
  Row,
  PanelSuccess,
  Table,
  PanelWarning,
} from "../src";
import type { PanelProps } from "../src";

export default {
  title: "Components/Panels",
  component: Panel,
  name: "Panel",
  argTypes: {
    className: { type: "string" },
    footer: { type: "string" },
    fullWidth: { type: "boolean" },
    title: { type: "string" },
    variant: {
      control: {
        type: "select",
        options: ["default", "primary", "success", "info", "warning", "danger"],
      },
    },
  },
} as Meta;

const Template = (args: PanelProps) => (
  <Main>
    <Container>
      <Row>
        <Column md={4}>
          <Panel {...args}>{args.children}</Panel>
        </Column>
      </Row>
    </Container>
  </Main>
);

export const PaddedContent: Story<PanelProps> = Template.bind({});
PaddedContent.args = {
  title: undefined,
  footer: undefined,
  className: undefined,
  variant: undefined,
  fullWidth: false,
  children: "Panel Content",
};

export const FullWidth: Story<PanelProps> = Template.bind({});
FullWidth.args = {
  title: undefined,
  footer: undefined,
  className: undefined,
  variant: undefined,
  fullWidth: true,
  children: "Full Width Content",
};

export const PaddedPlusFullWidthContent = () => {
  return (
    <Panel fullWidth>
      <PanelPaddedContent>Content</PanelPaddedContent>
      <Table id="panelTbl" caption="I'm a caption">
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mercedes</td>
            <td>CLS</td>
            <td>2019</td>
          </tr>
        </tbody>
      </Table>
    </Panel>
  );
};

export const HeadingAndFooter: Story<PanelProps> = Template.bind({});
HeadingAndFooter.args = {
  title: "Title",
  footer: "Footer",
  className: undefined,
  variant: undefined,
  fullWidth: false,
  children: "Content",
};

type StyledPanelProps = Omit<PanelProps, "variant">;

const DefaultTemplate = (args: StyledPanelProps) => (
  <Main>
    <Container>
      <Row>
        <Column md={4}>
          <PanelDefault {...args}>{args.children}</PanelDefault>
        </Column>
      </Row>
    </Container>
  </Main>
);
export const Default: Story<StyledPanelProps> = DefaultTemplate.bind({});
Default.args = {
  title: "Panel title",
  footer: undefined,
  className: undefined,
  fullWidth: false,
  children: "Panel Content",
};

const PrimaryTemplate = (args: StyledPanelProps) => (
  <Main>
    <Container>
      <Row>
        <Column md={4}></Column>
        <PanelPrimary {...args}>{args.children}</PanelPrimary>
      </Row>
    </Container>
  </Main>
);
export const Primary: Story<StyledPanelProps> = PrimaryTemplate.bind({});
Primary.args = {
  title: "Panel title",
  footer: undefined,
  className: undefined,
  fullWidth: false,
  children: "Panel Content",
};

const SuccessTemplate = (args: StyledPanelProps) => (
  <Main>
    <Container>
      <Row>
        <Column md={4}>
          <PanelSuccess {...args}>{args.children}</PanelSuccess>
        </Column>
      </Row>
    </Container>
  </Main>
);
export const Success: Story<StyledPanelProps> = SuccessTemplate.bind({});
Success.args = {
  title: "Panel title",
  footer: undefined,
  className: undefined,
  fullWidth: false,
  children: "Panel Content",
};

const InfoTemplate = (args: StyledPanelProps) => (
  <Main>
    <Container>
      <Row>
        <Column md={4}>
          <PanelInfo {...args}>{args.children}</PanelInfo>
        </Column>
      </Row>
    </Container>
  </Main>
);
export const Info: Story<StyledPanelProps> = SuccessTemplate.bind({});
Info.args = {
  title: "Panel title",
  footer: undefined,
  className: undefined,
  fullWidth: false,
  children: "Panel Content",
};

const WarningTemplate = (args: StyledPanelProps) => (
  <Main>
    <Container>
      <Row>
        <Column md={4}>
          <PanelWarning {...args}>{args.children}</PanelWarning>
        </Column>
      </Row>
    </Container>
  </Main>
);
export const Warning: Story<StyledPanelProps> = WarningTemplate.bind({});
Warning.args = {
  title: "Panel title",
  footer: undefined,
  className: undefined,
  fullWidth: false,
  children: "Panel Content",
};

const DangerTemplate = (args: StyledPanelProps) => (
  <Main>
    <PanelDanger {...args}>{args.children}</PanelDanger>
  </Main>
);
export const Danger: Story<StyledPanelProps> = DangerTemplate.bind({});
Danger.args = {
  title: "Panel title",
  footer: undefined,
  className: undefined,
  fullWidth: false,
  children: "Panel Content",
};
