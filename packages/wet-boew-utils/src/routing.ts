import { inBrowser } from "./dom";

/**
 * Several CDTS components will inject traditional `<a>` tags (i.e. Links)
 * for navigation but in a SPA we tend to want to handle routing ourselves.
 * This function will intercept standard links and allow us to provided
 * our own navigation handler.
 *
 * @export
 * @param {(elem: HTMLAnchorElement) => void} handler a function that receives
 * the `<a>` element and can decide what to do with it. If the `<a>` element is
 * already hooked to a WET-NOEW exit script (i.e. exitScript=true for
 * the current page), or if it is a download link, this function will not be run.
 */
export function onAnchorClick(handler: AnchorClickHandler) {
  if (inBrowser()) {
    document.addEventListener("click", makeClickHandler(handler));
  }
}

// We memoize the handler and associated callback to avoid attaching
// multiple handlers to every `<a>` element.
let memoizedHandler: AnchorClickHandler;
let memoizedAugmentedHandler: (e: MouseEvent) => void;

function makeClickHandler(handler: AnchorClickHandler) {
  if (isNewHandler(handler)) {
    memoizeHandler(handler);
    removeOldListener();
    memoizedAugmentedHandler = augmentHandler(handler);
  }
  return memoizedAugmentedHandler;
}

function isNewHandler(handler: AnchorClickHandler) {
  return !Object.is(memoizedHandler, handler);
}

function memoizeHandler(handler: AnchorClickHandler) {
  memoizedHandler = handler;
  return memoizedHandler;
}

function removeOldListener() {
  document.removeEventListener("click", memoizedAugmentedHandler);
}

function augmentHandler(handler: AnchorClickHandler) {
  return (event: MouseEvent) => {
    let a = event.target as HTMLElement;
    if (isAnchorElement(a)) {
      if (hasExitScript(a)) {
        console.log("Exit script detected. Bypassing link handler.");
        return event;
      }

      if (isDownloadLink(a)) {
        console.log("Download detected. Bypassing link handler.");
        return event;
      }

      event.preventDefault();
      handleOrignialOnClick(event);

      if (isLanguageToggle(a) || isExternalLink(a)) {
        redirect(a);
      } else {
        handler(a);
      }
    }
    return event;
  };
}

function isAnchorElement(el: HTMLElement): el is HTMLAnchorElement {
  return el?.tagName?.length > 0 && el.tagName.toUpperCase() === "A";
}

function hasExitScript(a: HTMLAnchorElement) {
  return a.classList.contains("wb-exitscript");
}

function isDownloadLink(a: HTMLAnchorElement) {
  return Boolean(a.download?.length);
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
    window.location.href = a.href;
  }
}

type AnchorClickHandler = (a: HTMLAnchorElement) => void;
