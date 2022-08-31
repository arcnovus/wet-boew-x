import { Meta } from "@storybook/react";
import { DataTable } from "@arcnovus/wet-boew-react";
export default {
  title: "Components/DataTables",
  component: DataTable,
} as Meta;

export const Default = () => (
  <DataTable id="normaldt" caption="default">
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
  </DataTable>
);

export const noSorting = () => (
  <DataTable
    id="nosortdt"
    caption="without sorting"
    settings={{ ordering: false }}
  >
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
  </DataTable>
);
export const noFiltering = () => (
  <DataTable
    id="nosearchdt"
    caption="without search"
    settings={{ searching: false }}
  >
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
  </DataTable>
);
