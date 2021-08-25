import { Heading, HeadingProps } from "./Heading";

export const H5 = (props: Omit<HeadingProps, "level">) => (
  <Heading level={5} {...props} />
);
