import React from "react";
import { Meta } from "@storybook/react";
import {
  Container,
  EmailInput,
  FileInput,
  Form,
  FormGroup,
  Language,
  PasswordInput,
  PrimaryButton,
  TextArea,
  useLanguage,
} from "../src";
import { Checkbox, SubmitButton } from "../src/forms";

export default {
  title: "Components/FormsOld",
  component: Form,
} as Meta;

export const BasicUse = () => {
  const { currentLanguage } = useLanguage({
    pathname: window.location.pathname,
    search: window.location.search,
  });
  const language = currentLanguage ?? ("en" as Language);
  return (
    <Container>
      <Form action="#" method="get" legend="Basic Form" id="basic-form">
        <FormGroup>
          <EmailInput
            id="exampleInputEmail1"
            name="email"
            label="Email address"
            language={language}
            required
          />
        </FormGroup>
        <FormGroup>
          <PasswordInput
            id="exampleInputPassword1"
            label="Password"
            language={language}
          />
        </FormGroup>
        <FormGroup>
          <FileInput
            id="exampleInputFile"
            label="File input"
            language={language}
          />
        </FormGroup>
        <Checkbox id="exampleCheck1" label="Check me out" language={language} />
        <SubmitButton variant="default">Submit</SubmitButton>
        {/* <DefaultButton type="submit">Submit</DefaultButton> */}
      </Form>
    </Container>
  );
};

export const KitchenSink = () => {
  const { currentLanguage } = useLanguage({
    pathname: window.location.pathname,
    search: window.location.search,
  });
  let language = currentLanguage ?? ("en" as Language);
  return (
    <Container>
      <Form action="#" method="get" legend="Kitchen Sink" id="kitchen-form">
        <FormGroup>
          <EmailInput
            id="exampleInputEmail1"
            name="email"
            label="Email address"
            language={language}
            required
          />
        </FormGroup>
        <FormGroup>
          <PasswordInput
            id="exampleInputPassword1"
            label="Password"
            language={language}
          />
        </FormGroup>
        <FormGroup>
          <TextArea
            language={language}
            id="exampleFormControlTextarea1"
            label="Description"
          />
        </FormGroup>
        <PrimaryButton type="submit">Submit</PrimaryButton>
        {/* <DefaultButton type="submit">Submit</DefaultButton> */}
      </Form>
    </Container>
  );
};
