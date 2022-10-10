import { Meta, Story } from "@storybook/react";
import React from "react";
import { TextArea, TextAreaProps } from "../src";

export default {
  title: "Components/FormsOld",
  component: TextArea,
  name: "TextArea",
  argTypes: {
    language: {
      control: {
        type: "select",
        options: ["en", "fr"],
      },
    },
    rows: {
      type: "number",
    },
  },
} as Meta;

const TextAreaTemplate = (args: TextAreaProps) => <TextArea {...args} />;
export const textArea: Story<TextAreaProps> = TextAreaTemplate.bind({});
textArea.args = {
  label: "Text Area",
  id: "exampleInput8",
  language: "en",
  required: false,
};
