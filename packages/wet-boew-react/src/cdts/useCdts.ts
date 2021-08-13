import { createContext, useContext } from "react";
import { CdtsEnvironmentParams, WetBuilder } from ".";
import { LanguagePlacement } from "../language";

export interface Cdts {
  wetBuilder: WetBuilder;
  cdnEnv: CdtsEnvironmentParams["cdnEnv"];
  cdnPath: CdtsEnvironmentParams["cdnPath"];
  languagePlacement?: LanguagePlacement;
}
export const CdtsContext = createContext<Cdts | null>(null);
export const useCdts = () => useContext(CdtsContext);
