/**
 * Several CDTS components will inject traditional `<a>` tags (i.e. Anchor Links)
 * for navigation but in a SPA we tend to want to handle routing ourselves.
 * This function will intercept standard anchor links and allow us to provided
 * our own navigation handler.
 *
 * @export
 * @param {(elem: HTMLAnchorElement) => void} handler a function that receives
 * the `<a>` element and can decide what to do with it. If the `<a>` element is
 * already hooked to a WET-NOEW exit script (i.e. exitScript=true for
 * the current page), this function will not be run.
 */
export function onAnchorClick(handler: (elem: HTMLAnchorElement) => void) {
  document.addEventListener("click", (event) => {
    let target = event.target as HTMLElement;
    if (target.tagName === "A") {
      if (target.classList.contains("wb-exitscript")) {
        console.log("Exit script detected. Bypassing link handler.");
        return event;
      }
      event.preventDefault();
      if (target.onclick) {
        target.onclick(event);
      }
      handler(target as HTMLAnchorElement);
    }
  });
}
