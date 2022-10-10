import { Story, Meta } from "@storybook/react";
import { DatePicker, Language } from "../src";
import type { DatePickerProps } from "../src";
import React from "react";
export default {
  title: "Components/FormsOld",
  component: DatePicker,
  name: "FormControl",
  argTypes: {
    min: { control: "date" },
    max: { control: "date" },
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

const Template = (args: DatePickerProps) => <DatePicker {...args} />;

export const datePicker: Story<DatePickerProps> = Template.bind({});
datePicker.args = {
  label: "Label 1",
  id: "exampleInput1",
  language: Language.EN,
  required: false,
};

export const datePickerMinMax: Story<DatePickerProps> = Template.bind({});
datePickerMinMax.args = {
  label: "Label 1",
  id: "exampleInput1",
  language: Language.EN,
  required: false,
  min: new Date("2022-08-19"),
  max: new Date(),
};
