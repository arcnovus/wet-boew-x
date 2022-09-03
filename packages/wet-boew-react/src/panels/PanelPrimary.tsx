import { PropsWithChildren } from "react";
import { Panel, PanelProps } from "./Panel";

export function PanelPrimary(
  props: PropsWithChildren<Omit<PanelProps, "variant">>
) {
  return <Panel variant="primary" {...props} />;
}
