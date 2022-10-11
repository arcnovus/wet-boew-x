import {
  Form,
  FormGroup,
  TextInput,
  SubmitButton,
  DefaultTemplate,
} from "@arcnovus/wet-boew-react";
import { MultiCheckboxSelect } from "../../components/MultiCheckboxSelect";

export default function FormExample() {
  return (
    <DefaultTemplate>
      <Form id="example" legend="Form Example" action="#" noValidate>
        <FormGroup>
          <TextInput id="fname" label="First name" required />
        </FormGroup>
        <FormGroup>
          <MultiCheckboxSelect
            required
            selectionLabel="Choose a country"
            id="countries"
            label="Country of Origin"
            // required
            options={[
              {
                label: "Canada",
                value: "CA",
              },
              {
                label: "United States",
                value: "US",
              },
              {
                label: "Mexico",
                value: "MX",
              },
              {
                label: "Spain",
                value: "ES",
              },
            ]}
          />
        </FormGroup>
        <SubmitButton value="Submit" />
      </Form>
    </DefaultTemplate>
  );
}
