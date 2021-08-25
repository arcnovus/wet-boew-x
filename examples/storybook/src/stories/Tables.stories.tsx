import { Meta, Story } from "@storybook/react";
import { Table, TableProps } from "@arcnovus/wet-boew-react";

export default {
  title: "Components/Tables",
  component: Table,
};

const Template: Story<TableProps> = (args: TableProps) => (
  <Table {...args}>
    <thead>
      <tr>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mercedes</td>
        <td>CLS</td>
        <td>2019</td>
      </tr>
      <tr>
        <td>BMW</td>
        <td>X6</td>
        <td>2020</td>
      </tr>
      <tr>
        <td>Ferrari</td>
        <td>308</td>
        <td>1985</td>
      </tr>
      <tr>
        <td>Porsche</td>
        <td>911</td>
        <td>2018</td>
      </tr>
    </tbody>
  </Table>
);

export const Basic = Template.bind({});
Basic.args = {
  id: "basict",
  caption: "Basic Table",
  striped: false,
  bordered: false,
  condensed: false,
  responsive: false,
  hover: false,
};

export const Striped = Template.bind({});
Striped.args = {
  id: "stripedt",
  caption: "Striped Table",
  striped: true,
  bordered: false,
  condensed: false,
  responsive: false,
  hover: false,
};

export const Hover = Template.bind({});
Hover.args = {
  id: "Hovert",
  caption: "Hover Table",
  striped: false,
  bordered: false,
  condensed: false,
  responsive: false,
  hover: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  id: "borddt",
  caption: "Bordered Table",
  striped: false,
  bordered: true,
  condensed: false,
  responsive: false,
  hover: false,
};

export const Condensed = Template.bind({});
Condensed.args = {
  id: "cont",
  caption: "Condensed Table",
  striped: false,
  bordered: false,
  condensed: true,
  responsive: false,
  hover: false,
};

export const Responsive = Template.bind({});
Responsive.args = {
  id: "stripedt",
  caption: "Responsive Table",
  striped: false,
  bordered: false,
  condensed: true,
  responsive: false,
  hover: false,
};
