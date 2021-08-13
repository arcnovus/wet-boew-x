import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Column from "../components/Column";
import Container from "../components/Container";
import Row from "../components/Row";
import Well from "../components/Well";

export default {
  title: "WET-BOEW/Grid System/Column",
  component: Column,
} as ComponentMeta<typeof Column>;

/**
 * Use a single set of `<Column md={*}>` components to create a basic grid system that starts out
 * stacked on mobile and tablet devices (the extra small to small range).
 * It then becomes horizontal on desktop (medium) devices.
 * Place grid columns in any `<Row>`.
 */
const Template: ComponentStory<typeof Column> = (args) => (
  <Container variant="fluid">
    <Row>
      <Column md={12} {...args}>
        <Well size="small">
          <code>{JSON.stringify(args)}</code>
        </Well>
      </Column>
    </Row>
  </Container>
);

const BasicColumn = Template.bind({});
BasicColumn.args = { md: 12 };

export { BasicColumn };
