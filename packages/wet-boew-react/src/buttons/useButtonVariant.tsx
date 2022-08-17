export const buttonCssClasses = {
  default: "btn btn-default",
  primary: "btn btn-primary",
  success: "btn btn-success",
  info: "btn btn-info",
  warning: "btn btn-warning",
  danger: "btn btn-danger",
  link: "btn btn-link",
} as const;

export type ButtonVariant = keyof typeof buttonCssClasses;

export function useButtonVariant(variant: ButtonVariant): string {
  return buttonCssClasses[variant ?? "default"];
}
