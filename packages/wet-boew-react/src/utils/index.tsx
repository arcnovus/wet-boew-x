import deepMerge from "deepmerge";

export { deepMerge };

// export function injectScriptRef({
//   url,
//   onload,
//   placement,
// }: {
//   url: string;
//   onload?: () => any;
//   placement?: "head" | "body";
// }) {
//   ensureDom();
//   const id = urlToId(url);
//   const found = document.getElementById(id) as HTMLScriptElement;
//   if (found) {
//     return found;
//   }

//   console.log("cdts", `injecting ${id}`);

//   const scriptEl = document.createElement("script");
//   scriptEl.id = id;
//   scriptEl.type = "text/javascript";
//   scriptEl.src = url;
//   if (onload != null) {
//     scriptEl.onload = onload;
//   }

//   placement = placement ?? "head";
//   if (document[placement].children.length > 0) {
//     document[placement].lastChild!.after(scriptEl);
//   } else {
//     document[placement].appendChild(scriptEl);
//   }

//   return scriptEl;
// }

export function injectCssRef({
  url,
  rel,
  onload,
}: {
  url: string;
  rel?: string;
  onload?: () => any;
}) {
  ensureDom();

  const id = urlToId(url);
  const found = document.getElementById(id);
  if (found != null) {
    return found;
  }
  console.log("cdts", `injecting ${id}`);
  const linkEl = document.createElement("link");
  linkEl.rel = rel ?? "stylesheet";
  linkEl.href = url;
  linkEl.id = id;
  if (onload != null) {
    linkEl.onload = onload;
  }

  if (document.head.children.length > 0) {
    document.head.lastChild!.after(linkEl);
  } else {
    document.head.appendChild(linkEl);
  }
  return linkEl;
}

export function ensureDom() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    throw new Error(
      "No global window or document available. You may be trying to access the DOM from server-side code."
    );
  }
}

export function urlToId(url: string) {
  return url.split("/").pop() ?? url;
}
