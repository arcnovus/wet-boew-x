import { inBrowser } from "./dom";

/**
 * Several CDTS components will inject traditional `<a>` tags (i.e. a Links)
 * for navigation but in a SPA we tend to want to handle routing ourselves.
 * This function will intercept standard a links and allow us to provided
 * our own navigation handler.
 *
 * @export
 * @param {(elem: HTMLAnchorElement) => void} handler a function that receives
 * the `<a>` element and can decide what to do with it. If the `<a>` element is
 * already hooked to a WET-NOEW exit script (i.e. exitScript=true for
 * the current page), this function will not be run.
 */

export function onAnchorClick(handler: AnchorClickHandler) {
  if (inBrowser()) {
    document.addEventListener("click", makeClickHandler(handler));
  }
}

// We memoize the handler and associated callback to avoid attaching
// multiple handlers to every `<a>` element.
let previousHandler: AnchorClickHandler;
let previousAugmentedHandler: (e: MouseEvent) => void;

function makeClickHandler(handler: AnchorClickHandler) {
  if (isNewHandler(handler)) {
    memoizeHandler(handler);
    removeOldListener();
    previousAugmentedHandler = augmentHandler(handler);
  }
  return previousAugmentedHandler;
}

function isNewHandler(handler: AnchorClickHandler) {
  return !Object.is(previousHandler, handler);
}

function memoizeHandler(handler: AnchorClickHandler) {
  previousHandler = handler;
  return previousHandler;
}

function removeOldListener() {
  document.removeEventListener("click", previousAugmentedHandler);
}

function augmentHandler(handler: AnchorClickHandler) {
  return (event: MouseEvent) => {
    let a = event.target as HTMLElement;
    if (isAnchorElement(a)) {
      if (hasExitScript(a)) {
        console.log("Exit script detected. Bypassing link handler.");
        return event;
      }

      event.preventDefault();
      handleOrignialOnClick(event);

      if (isLanguageToggle(a) || isExternalLink(a)) {
        return redirect(a);
      }

      return handler(a);
    }
  };
}

function isAnchorElement(el: HTMLElement): el is HTMLAnchorElement {
  return el?.tagName?.length > 0 && el.tagName.toUpperCase() === "A";
}

function hasExitScript(a: HTMLAnchorElement) {
  return a.classList.contains("wb-exitscript");
}

function handleOrignialOnClick(e: MouseEvent) {
  const a = e.target as HTMLAnchorElement;
  a?.onclick !== null && a.onclick(e);
}

function isLanguageToggle(a: HTMLAnchorElement) {
  return a.lang.length > 0;
}

function isExternalLink(a: HTMLAnchorElement) {
  return (
    a.href.toLowerCase().startsWith("http") &&
    new URL(a.href).origin !== window.location.origin
  );
}

function redirect(a: HTMLAnchorElement) {
  if (a.target?.length > 0) {
    window.open(a.href, a.target);
  } else {
    top.location.href = a.href;
  }
}

type AnchorClickHandler = (a: HTMLAnchorElement) => void;
