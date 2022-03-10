import { Meta, Story } from "@storybook/react";
import { Button } from "@arcnovus/wet-boew-react";
import type { ButtonProps } from "@arcnovus/wet-boew-react";

export default {
  title: "Components/Buttons",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "default",
          "primary",
          "success",
          "info",
          "warning",
          "danger",
          "link",
        ],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args}>Button</Button>
);

export const Variable = Template.bind({});
Variable.args = {
  variant: "default",
};
