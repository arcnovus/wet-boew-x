import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SkipTo from "../components/SkipTo";

export default {
  title: "WET-BOEW/Skip/SkipToContent",
  component: SkipTo,
} as ComponentMeta<typeof SkipTo>;

/**
 * Use a single set of `<Column md={*}>` components to create a basic grid system that starts out
 * stacked on mobile and tablet devices (the extra small to small range).
 * It then becomes horizontal on desktop (medium) devices.
 * Place grid columns in any `<Row>`.
 */
const Template: ComponentStory<typeof SkipTo> = (args) => (
  <>
    <SkipTo {...args} />
    <div style={{ height: "120vh" }}>
      <code>JSON.stringify(args)</code>
    </div>
    <h1 id="wb-cont">Main</h1>
  </>
);

const SkipToLinks = Template.bind({});
SkipToLinks.args = { links: [{ anchor: "wb-cont", label: "main" }] };

export { SkipToLinks };
