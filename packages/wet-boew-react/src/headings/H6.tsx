import { Heading, HeadingProps } from "./Heading";

export const H6 = (props: Omit<HeadingProps, "level">) => (
  <Heading level={6} {...props} />
);
