import { Meta } from "@storybook/react";
import { PageTitle } from "@arcnovus/wet-boew-react";

export default {
  title: "Components/PageTitle",
  component: PageTitle,
} as Meta;

export const pageTitle = () => <PageTitle text="Page Title" />;
