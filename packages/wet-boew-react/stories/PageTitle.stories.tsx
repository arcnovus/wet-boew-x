import React from "react";
import { Meta } from "@storybook/react";
import { PageTitle } from "../src";

export default {
  title: "Components/PageTitle",
  component: PageTitle,
} as Meta;

export const pageTitle = () => <PageTitle text="Page Title" />;
