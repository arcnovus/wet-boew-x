import { PropsWithChildren } from "react";
import { Panel, PanelProps } from "./Panel";

export function PanelWarning(
  props: PropsWithChildren<Omit<PanelProps, "variant">>
) {
  return <Panel variant="warning" {...props} />;
}
