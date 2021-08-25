export { onAnchorClick } from "./routing";
export { patchSearch } from "./search";
export { setDocumentTitle } from "./page-meta";
export { registerWetComponent } from "./wet";
export { inBrowser } from "./dom";
export {
  injectCdtsRefFooter,
  injectCdtsRefTop,
  injectCdtsResources,
  injectCdtsSplashTop,
} from "./cdts-injector";

export {
  Language,
  computeLngLinks,
  getCurrentLanguage,
  setLanguage,
} from "./language";
export { computeColumnCssClass } from "./column-utils";
export { computeContainerCssClass } from "./container-utils";

export type { ContainerProps, ContainerVariant } from "./container-utils";
export type { CdtsVersion } from "./cdts-injector";
export type { SearchHandler, SearchElements, PatchSearchProps } from "./search";
export type {
  ColumnSpan,
  ColumnPosition,
  ColumnSpanProps,
  ColumnOffsetProps,
  ColumnPullProps,
  ColumnPushProps,
  ColumnProps,
} from "./column-utils";

export interface WetBuilder {
  appFooter: (options: CdtsAppFooterParams) => string;
  appTop: (options: CdtsAppTopParams) => string;
  environment: (options: CdtsEnvironmentParams) => string;
  footer: (options: CdtsFooterParams) => string;
  preFooter: (options: CdtsPreFooterParams) => string;
  refFooter: (options: CdtsRefFooterParams) => string;
  refTop: (options: CdtsRefTopParams) => string;
  secmenu: (options: CdtsSecMenuParams) => string;
  splash: (options: CdtsSplashParams) => string;
  splashTop: (options: CdtsSplashTopParams) => string;
  top: (options: CdtsTopParams) => string;
}

export interface CdtsAppFooterParams extends CdtsEnvironmentParams {
  footerSections?: { href: Href; text: string; newWindow?: boolean }[];
  contactLink?: { href: Href; newWindow?: boolean }[];
  privacyLink?: { href: Href; newWindow?: boolean }[];
  termsLink?: { href: Href; newWindow?: boolean }[];
  showFeatures?: boolean;
}

export interface CdtsAppTopParams extends CdtsEnvironmentParams {
  appName: { text: string; href: Href }[];
  appSettings?: { href: Href }[];
  breadcrumbs?: CdtsBreadcrumb[];
  customSearch?: string | boolean;
  lngLinks?: CdtsLangLink[];
  showPreContent?: boolean;
  signIn?: { href: Href }[];
  signOut?: { href: Href }[];
  menuPath?: Href;
  menuLinks?: CdtsMenuLink[];
  topSecMenu?: boolean;
}

export interface CdtsEnvironmentParams {
  cdnEnv?: string;
  cdnPath?: string;
}

export interface CdtsFooterParams extends CdtsEnvironmentParams {
  contactLinks?: {
    href: Href;
    newWindow?: boolean;
    text?: string;
  }[];
  showFooter?: boolean;
  showFeatures?: boolean;
}

export interface CdtsPreFooterParams extends CdtsEnvironmentParams {
  dateModified?: string;
  pagedetails?: boolean;
  screenIdentifier?: string;
  showFeedback?: boolean | Href;
  showPostContent?: boolean;
  showShare?: boolean | string[];
  versionIdentifier?: string;
}

export interface CdtsRefFooterParams extends CdtsEnvironmentParams {
  exitScript?: boolean;
  exitURL?: Href;
  cancelMsg?: string;
  yesMsg?: string;
  exitMsg?: string;
  exitDomains?: string;
  displayModal?: boolean;
  webAnalytics?: boolean;
  jqueryEnv?: "external";
  isApplication?: boolean;
}

export interface CdtsRefTopParams extends CdtsEnvironmentParams {
  isApplication?: boolean;
  webAnalytics?: {
    environment: "staging" | "production";
    version: 1 | 2;
  }[];
}

export interface CdtsSecMenuParams extends CdtsEnvironmentParams {
  sections: {
    sectionName: string;
    sectionLink?: Href;
    newWindow?: boolean;
    menuLinks: CdtsMenuLink[];
  }[];
}

export interface CdtsSplashParams extends CdtsEnvironmentParams {
  indexEng: Href;
  indexFra: Href;
  termsEng: Href;
  termsFra: Href;
  nameEng?: string;
  nameFra?: string;
}

export interface CdtsMenuLink {
  href: Href;
  text: string;
  newWindow?: boolean;
  subLinks?: { subhref: Href; subtext: string; newWindow?: boolean }[];
}

export interface CdtsTopParams extends CdtsEnvironmentParams {
  breadcrumbs?: CdtsBreadcrumb[];
  lngLinks?: CdtsLangLink[];
  search?: boolean;
  showPreContent?: boolean;
  siteMenu?: boolean;
  topSecMenu?: boolean;
}

export type CdtsSplashTopParams = CdtsEnvironmentParams;

export interface CdtsBreadcrumb {
  title: string;
  href: Href;
  acronym?: string;
}

export interface CdtsLangLink {
  lang: "fr" | "en";
  href: Href;
  text: string;
}

export type Href = `${
  | "http://"
  | "https://"
  | "mailto:"
  | "/"
  | "../"
  | "./"
  | "#"}${string}`;

export type Src = `${"http://" | "https://" | "/" | "../" | "./"}${string}`;
