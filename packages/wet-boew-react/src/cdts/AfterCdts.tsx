import { PropsWithChildren } from "react";
import { useCdts } from "./useCdts";

export function AfterCdts({ children }: PropsWithChildren<any>) {
  const { wetBuilder } = useCdts() ?? {};
  return <>{wetBuilder && children}</>;
}
