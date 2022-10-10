import { Story, Meta } from "@storybook/react";
import {
  EmailInput,
  FormControl,
  PasswordInput,
  TextInput,
  TelInput,
  NumberInput,
  UrlInput,
  TextAreaProps,
  TextArea,
  FileInputProps,
  FileInput,
  Language,
} from "../src";
import type {
  FormControlProps,
  TextInputProps,
  EmailInputProps,
  PasswordInputProps,
  NumberInputProps,
  TelInputProps,
  UrlInputProps,
} from "../src";
import React from "react";

export default {
  title: "Components/FormsOld",
  component: FormControl,
  name: "FormControl",
  argTypes: {
    language: {
      control: {
        type: "select",
        options: [Language.EN, "fr"],
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

const FormControlTemplate = (args: FormControlProps) => (
  <FormControl {...args} />
);
export const formControl: Story<FormControlProps> = FormControlTemplate.bind(
  {}
);
formControl.args = {
  label: "Label 1",
  id: "exampleInput1",
  language: Language.EN,
  required: false,
};

const TextInputTemplate = (args: TextInputProps) => <TextInput {...args} />;
export const textInput: Story<TextInputProps> = TextInputTemplate.bind({});
textInput.args = {
  label: "Text",
  id: "exampleInput2",
  language: Language.EN,
  required: false,
};

const EmailInputTemplate = (args: EmailInputProps) => <EmailInput {...args} />;
export const emailInput: Story<EmailInputProps> = EmailInputTemplate.bind({});
emailInput.args = {
  label: "Email",
  id: "exampleInput3",
  language: Language.EN,
  required: false,
};

const PasswordInputTemplate = (args: PasswordInputProps) => (
  <PasswordInput {...args} />
);
export const passwordInput: Story<PasswordInputProps> =
  PasswordInputTemplate.bind({});
passwordInput.args = {
  label: "Password",
  id: "exampleInput4",
  language: Language.EN,
  required: false,
};

const NumberInputTemplate = (args: NumberInputProps) => (
  <NumberInput {...args} />
);
export const numberInput: Story<NumberInputProps> = NumberInputTemplate.bind(
  {}
);
numberInput.args = {
  label: "Number",
  id: "exampleInput5",
  language: Language.EN,
  required: false,
};

const TelInputTemplate = (args: TelInputProps) => <TelInput {...args} />;
export const telInput: Story<TelInputProps> = TelInputTemplate.bind({});
telInput.args = {
  label: "Tel",
  id: "exampleInput6",
  language: Language.EN,
  required: false,
};

const UrlInputTemplate = (args: UrlInputProps) => <UrlInput {...args} />;
export const urlInput: Story<UrlInputProps> = UrlInputTemplate.bind({});
urlInput.args = {
  label: "URL",
  id: "exampleInput7",
  language: Language.EN,
  required: false,
};

const FileInputTemplate = (args: FileInputProps) => <FileInput {...args} />;
export const fileInput: Story<FileInputProps> = FileInputTemplate.bind({});
urlInput.args = {
  label: "File input",
  id: "exampleInput9",
  language: Language.EN,
  required: false,
};
