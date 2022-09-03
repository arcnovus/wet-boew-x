import { PropsWithChildren } from "react";
import { Panel, PanelProps } from "./Panel";

export function PanelDefault(
  props: PropsWithChildren<Omit<PanelProps, "variant">>
) {
  return <Panel variant="default" {...props} />;
}
