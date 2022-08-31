export const panelCssClasses = {
  default: "panel panel-default",
  primary: "panel panel-primary",
  success: "panel panel-success",
  info: "panel panel-info",
  warning: "panel panel-warning",
  danger: "panel panel-danger",
} as const;

export type PanelVariant = keyof typeof panelCssClasses;

export function usePanelVariant(variant?: PanelVariant): string {
  return panelCssClasses[variant ?? "default"];
}
