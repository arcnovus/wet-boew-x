import { Meta } from "@storybook/react";
import {
  DefaultButton,
  PrimaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton,
  LinkButton,
} from "@arcnovus/wet-boew-react";

export default {
  title: "Components/Buttons",
  component: DefaultButton,
} as Meta;

export const Default = () => <DefaultButton>Default</DefaultButton>;
export const Primary = () => <PrimaryButton>Primary</PrimaryButton>;
export const Success = () => <SuccessButton>Success</SuccessButton>;
export const Info = () => <InfoButton>Info</InfoButton>;
export const Warning = () => <WarningButton>Warning</WarningButton>;
export const Danger = () => <DangerButton>Danger</DangerButton>;
export const Link = () => <LinkButton>Link</LinkButton>;
