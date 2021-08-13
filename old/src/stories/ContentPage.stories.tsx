import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentPage from "../components/ContentPage";

export default {
  title: "WET-BOEW/Layouts/ContentPage",
  component: ContentPage,
} as ComponentMeta<typeof ContentPage>;

/**
 * Use a single set of `<ContentPage md={*}>` components to create a basic grid system that starts out
 * stacked on mobile and tablet devices (the extra small to small range).
 * It then becomes horizontal on desktop (medium) devices.
 * Place grid ContentPages in any `<Row>`.
 */
const Template: ComponentStory<typeof ContentPage> = (args) => (
  <ContentPage {...args}></ContentPage>
);

const BasicContentPage = Template.bind({});
BasicContentPage.args = { children: "hello", title: "Home" };

export { BasicContentPage };
