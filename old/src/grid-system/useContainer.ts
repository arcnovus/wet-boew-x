import { computeContainerCssClass } from "./container-utils";

import type { ContainerProps } from "./container-utils";

export default function useContainer(props: ContainerProps) {
  const containerCssClass = computeContainerCssClass(props);
  return { containerCssClass };
}

export type { ContainerProps } from "./container-utils";
