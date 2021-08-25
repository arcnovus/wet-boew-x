import { Meta } from "@storybook/react";
import { Alert, AlertLink, H3 } from "@arcnovus/wet-boew-react";
export default {
  title: "Components/Alerts",
  component: Alert,
} as Meta;

export const Success = () => (
  <Alert variant="success">
    <p>(Success content here.)</p>
  </Alert>
);

export const SuccessWithTitle = () => (
  <Alert variant="success">
    <H3>(Title)</H3>
    <p>(Success content here.)</p>
  </Alert>
);

export const InfoTitle = () => (
  <Alert variant="info">
    <p>(Info content here.)</p>
  </Alert>
);

export const InfoWithTitle = () => (
  <Alert variant="info">
    <H3>(Title)</H3>
    <p>(Info content here.)</p>
  </Alert>
);

export const Warning = () => (
  <Alert variant="warning">
    <p>(Warning content here.)</p>
  </Alert>
);

export const WarningWithTitle = () => (
  <Alert variant="warning">
    <H3>(Title)</H3>
    <p>(Warning content here.)</p>
  </Alert>
);

export const Danger = () => (
  <Alert variant="danger">
    <p>(Danger content here.)</p>
  </Alert>
);

export const DangerWithTitle = () => (
  <Alert variant="danger">
    <H3>(Title)</H3>
    <p>(Danger content here.)</p>
  </Alert>
);

export const SuccessWithLink = () => (
  <Alert variant="success">
    <H3>(Title)</H3>
    <p>
      (Success content here <AlertLink>link text</AlertLink>.)
    </p>
  </Alert>
);

export const InfoWithLink = () => (
  <Alert variant="info">
    <H3>(Title)</H3>
    <p>
      (Info content here <AlertLink>link text</AlertLink>.)
    </p>
  </Alert>
);

export const WarningWithLink = () => (
  <Alert variant="warning">
    <H3>(Title)</H3>
    <p>
      (Warning content here <AlertLink>link text</AlertLink>.)
    </p>
  </Alert>
);

export const DangerWithLink = () => (
  <Alert variant="danger">
    <H3>(Title)</H3>
    <p>
      (Danger content here <AlertLink>link text</AlertLink>.)
    </p>
  </Alert>
);
