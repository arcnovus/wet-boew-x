import { PropsWithChildren } from "react";
import { Panel, PanelProps } from "./Panel";

export function InfoPanel(
  props: PropsWithChildren<Omit<PanelProps, "variant">>
) {
  return <Panel variant="info" {...props} />;
}
