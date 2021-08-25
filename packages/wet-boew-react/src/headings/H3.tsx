import { Heading, HeadingProps } from "./Heading";

export const H3 = (props: Omit<HeadingProps, "level">) => (
  <Heading level={3} {...props} />
);
