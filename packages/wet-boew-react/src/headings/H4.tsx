import { Heading, HeadingProps } from "./Heading";

export const H4 = (props: Omit<HeadingProps, "level">) => (
  <Heading level={4} {...props} />
);
