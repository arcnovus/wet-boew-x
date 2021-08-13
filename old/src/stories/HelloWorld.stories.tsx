import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HelloWorld } from "wet-boew-react";

export default {
  title: "WET-BOEW/HelloWorld",
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = (args) => (
  <HelloWorld {...args} />
);

const helloWorld = Template.bind({});
const helloBill = Template.bind({});
helloBill.args = { name: "Bill" };

export { helloBill, helloWorld };
