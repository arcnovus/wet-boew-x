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

// Avoid the temptation to use toLocaleDateString("en-CA") here.
// Chrome on Windows will return a date in the format "YYYY/MM/DD"
// instead of "YYYY-MM-DD". This is a bug in Chrome for Windows.
// See: https://bugs.chromium.org/p/chromium/issues/detail?id=1414785
export function wbDateFormat(date: Date): string {
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);

  return `${year}-${month}-${day}`;
}

export interface WetBoew {
  selectors: string[];
  start: () => void;
}
