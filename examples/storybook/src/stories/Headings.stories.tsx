import { Meta } from "@storybook/react";
import { Heading, H1, H2, H3, H4, H5, H6 } from "@arcnovus/wet-boew-react";

export default {
  title: "Components/Headings",
  component: Heading,
} as Meta;

export const Heading1 = () => <H1>Heading 1</H1>;
export const PageHeader1 = () => <H1 variant="page-header">Page Header 1</H1>;

export const Heading2 = () => <H2>Heading 2</H2>;
export const PageHeader2 = () => <H2 variant="page-header">Page Header 2</H2>;

export const Heading3 = () => <H3>Heading 3</H3>;
export const PageHeader3 = () => <H3 variant="page-header">Page Header 3</H3>;

export const Heading4 = () => <H4>Heading 4</H4>;
export const PageHeader4 = () => <H4 variant="page-header">Page Header 4</H4>;

export const Heading5 = () => <H5>Heading 5</H5>;
export const PageHeader5 = () => <H5 variant="page-header">Page Header 5</H5>;

export const Heading6 = () => <H6>Heading 6</H6>;
export const PageHeader6 = () => <H6 variant="page-header">Page Header 6</H6>;
