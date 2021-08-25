export function inBrowser(): Boolean {
  return typeof window !== "undefined";
}
