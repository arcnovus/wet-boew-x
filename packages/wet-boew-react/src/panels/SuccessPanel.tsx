import { PropsWithChildren } from "react";
import { Panel, PanelProps } from "./Panel";

export function SuccessPanel(
  props: PropsWithChildren<Omit<PanelProps, "variant">>
) {
  return <Panel variant="success" {...props} />;
}
