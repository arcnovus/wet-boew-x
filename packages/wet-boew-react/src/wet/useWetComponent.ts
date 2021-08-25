import { useLayoutEffect } from "react";
import { registerWetComponent } from "@arcnovus/wet-boew-utils";

export function useWetComponent(selector: string) {
  useLayoutEffect(() => {
    registerWetComponent(selector);
  });
}
