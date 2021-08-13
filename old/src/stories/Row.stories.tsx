import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Column from "../components/Column";
import Container from "../components/Container";
import Row from "../components/Row";
import Well from "../components/Well";

export default {
  title: "WET-BOEW/Grid System/Row",
  component: Row,
} as ComponentMeta<typeof Row>;

/**
 * Use a single set of `<Column md={*}>` components to create a basic grid system that starts out
 * stacked on mobile and tablet devices (the extra small to small range).
 * It then becomes horizontal on desktop (medium) devices.
 * Place grid columns in any `<Row>`.
 */
const Template: ComponentStory<typeof Row> = (args) => (
  <Container variant="fluid">
    <Row {...args}>
      <Column md={4}>
        <Well size="small">
          <code>{JSON.stringify({ md: 4 })}</code>
        </Well>
      </Column>
      <Column md={4}>
        <Well size="small">
          <code>{JSON.stringify({ md: 4 })}</code>
        </Well>
      </Column>
      <Column md={4}>
        <Well size="small">
          <code>{JSON.stringify({ md: 4 })}</code>
        </Well>
      </Column>
    </Row>
    <Row {...args}>
      <Column md={6}>
        <Well size="small">
          <code>{JSON.stringify({ md: 6 })}</code>
        </Well>
      </Column>
      <Column md={6}>
        <Well size="small">
          <code>{JSON.stringify({ md: 6 })}</code>
        </Well>
      </Column>
    </Row>
    <Row {...args}>
      <Column md={4}>
        <Well size="small">
          <code>{JSON.stringify({ md: 4 })}</code>
        </Well>
      </Column>
      <Column md={8}>
        <Well size="small">
          <code>{JSON.stringify({ md: 8 })}</code>
        </Well>
      </Column>
    </Row>
  </Container>
);

export const BasicRows = Template.bind({});
BasicRows.args = { className: "" };
