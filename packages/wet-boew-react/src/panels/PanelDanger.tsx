import { PropsWithChildren } from "react";
import { Panel, PanelProps } from "./Panel";

export function PanelDanger(
  props: PropsWithChildren<Omit<PanelProps, "variant">>
) {
  return <Panel variant="danger" {...props} />;
}
