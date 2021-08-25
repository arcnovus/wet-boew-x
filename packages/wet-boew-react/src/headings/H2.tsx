import { Heading, HeadingProps } from "./Heading";

export const H2 = (props: Omit<HeadingProps, "level">) => (
  <Heading level={2} {...props} />
);
