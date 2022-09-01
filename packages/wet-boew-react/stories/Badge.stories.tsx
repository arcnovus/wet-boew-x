import { Story, Meta } from "@storybook/react";
import { Badge } from "../src";
import type { BadgeProps } from "../src";
import React from "react";

export default {
  title: "Components/Badges",
  component: Badge,
  name: "Badge",
  argTypes: {
    value: { type: "number" },
    description: { type: "string" },
  },
} as Meta;

const Template = (args: BadgeProps) => (
  <p>
    <a href=".">
      Inbox <Badge {...args} />
    </a>
  </p>
);

export const Default: Story<BadgeProps> = Template.bind({});
Default.args = {
  value: 29,
  description: "items",
};

export const Collapsed: Story<BadgeProps> = Template.bind({});
Collapsed.args = {
  value: undefined,
  description: undefined,
};
