import {
  DefaultTemplate,
  Form,
  FormGroup,
  Select,
  SubmitButton,
  TextInput,
} from "@arcnovus/wet-boew-react";
import { useState } from "react";

export default function DynamicErrorMessage() {
  const [message, setMessage] = useState<string>("Default error");
  const messages = [
    {
      value: "default",
      label: "Default error",
    },
    {
      value: "alternate",
      label: "Alternate error",
    },
    {
      value: "tertiary",
      label: "Tertiary error",
    },
  ];

  return (
    <DefaultTemplate>
      <Form
        id="dynamicErrorMsgForm"
        legend="Dynamic Error Messages Demo"
        action="#"
        noValidate
      >
        <FormGroup id="selectMessageControl">
          <Select
            id={"msgSelect"}
            options={messages}
            optionsLabel={"Select an Error Message"}
            defaultValue={message}
            onChange={(e) => {
              let msg = messages.find((m) => m.value === e.target.value);
              console.log("msg", msg);
              setMessage(msg?.label ?? "default");
            }}
          ></Select>
        </FormGroup>
        <FormGroup id="inputThatWillError">
          {message === messages[0].label && (
            <TextInput
              id="textInput"
              name="textInput"
              label="Error if blank"
              placeholder="leave me blank"
              required
              data-msg={messages[0].label}
            ></TextInput>
          )}
          {message === messages[1].label && (
            <TextInput
              id="textInput"
              name="textInput"
              label="Error if blank"
              placeholder="leave me blank"
              required
              data-msg={messages[1].label}
            ></TextInput>
          )}
          {message === messages[2].label && (
            <TextInput
              id="textInput"
              name="textInput"
              label="Error if blank"
              placeholder="leave me blank"
              required
              data-msg={messages[2].label}
            ></TextInput>
          )}
        </FormGroup>
        <SubmitButton value="Submit" />
      </Form>
    </DefaultTemplate>
  );
}
