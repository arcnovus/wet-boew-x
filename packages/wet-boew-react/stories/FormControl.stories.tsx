import { Story, Meta } from "@storybook/react";
import { FormControl } from "../src";
import { FormControlProps } from "@arcnovus/wet-boew-react/dist/forms/FormControl";
import React from "react";
export default {
  title: "Components/Forms",
  component: FormControl,
  name: "FormControl",
  argTypes: {
    language: {
      control: {
        type: "select",
        options: ["en", "fr"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["text", "email", "password", "number", "tel", "url"],
      },
    },
  },
} as Meta;

const Template = (args: FormControlProps) => <FormControl {...args} />;

export const basicFormField: Story<FormControlProps> = Template.bind({});
basicFormField.args = {
  label: "Label 1",
  id: "exampleInput1",
  language: "en",
  required: false,
};
