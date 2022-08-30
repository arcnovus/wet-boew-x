import { Story, Meta } from "@storybook/react";
import { Badge } from "@arcnovus/wet-boew-react";
import type { BadgeProps } from "@arcnovus/wet-boew-react";

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
