import { createContext, useContext } from "react";
import { CdtsEnvironmentParams, WetBuilder } from ".";
import type { Language } from "../language";

export interface Cdts {
  wetBuilder: WetBuilder;
  cdnEnv: CdtsEnvironmentParams["cdnEnv"];
  cdnPath: CdtsEnvironmentParams["cdnPath"];
  fallbackLanguage: Language;
  appTitle: string;
}
export const CdtsContext = createContext<Cdts | null>(null);
export const useCdts = () => useContext(CdtsContext);
