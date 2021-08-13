import { useLayoutEffect } from "react";
import { registerWetComponent } from "./wet-utils";

export function useWetComponent(selector: string) {
  useLayoutEffect(() => {
    registerWetComponent(selector);
  });
}
