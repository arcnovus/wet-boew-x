export async function registerWetComponent(selector: string): Promise<void> {
  const wet: WetBoew = (window as any).wb as WetBoew;
  const selectors = wet?.selectors ?? [];
  if (wet && !selectors.includes(selector)) {
    // tell WET there's a new element on the page.
    selectors.push(selector);
    // let WET do its magic.
    wet.start(); // TODO: Ensure this is not a memory leak.
  }

  // BUG: WET's imperative DOM manipulation interferes with
  // HMR (hot module replacement) during development. Sometimes we get
  // multiple component elements rendering. This is only affecting HMR so
  // it shouldn't be an issue when deployed.
}

export interface WetBoew {
  selectors: string[];
  start: () => void;
}
