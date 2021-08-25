import { Heading, HeadingProps } from "./Heading";

export const H1 = (props: Omit<HeadingProps, "level">) => (
  <Heading level={1} {...props} />
);
