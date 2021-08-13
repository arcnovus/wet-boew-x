const VALID_CONTAINER_VARIANTS = ["fixed", "fluid"] as const;
export type ContainerVariant = typeof VALID_CONTAINER_VARIANTS[number];

export interface ContainerProps {
  variant?: ContainerVariant;
  className?: string;
}

export function computeContainerCssClass({
  variant,
  className,
}: ContainerProps) {
  const variantCssClass = computeVariantCssClass(variant);
  return `${variantCssClass} ${className ?? ""}`.trim();
}

function computeVariantCssClass(variant?: string) {
  switch (variant) {
    case "fixed":
      return "container";
    case "fluid":
      return "container-fluid";
    default:
      return "container";
  }
}
