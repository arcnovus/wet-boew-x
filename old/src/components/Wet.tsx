import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "../i18n";
import { getCurrentLanguage } from "../i18n/language-utils";
import Container from "./Container";
import Main from "./Main";

function computeWetOptions(options: WetOptions, currentLanguage?: "en" | "fr") {
  let computedOptions: WetOptions = { ...options };
  computedOptions.isApplication = options.isApplication ?? false;
  computedOptions.basePath = options.basePath ?? "/";
  computedOptions.template =
    determineLanguage(options.basePath) == null
      ? "splash"
      : options.template ?? "default";

  computedOptions.cdtsAppCssUrl =
    options.cdtsAppCssUrl ??
    "https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_39/cdts/cdtsapps.css";
  computedOptions.cdtsScriptUrlEng =
    options.cdtsScriptUrlEng ??
    "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/wet-en.js";
  computedOptions.cdtsScriptUrlFra =
    options.cdtsScriptUrlFra ??
    "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/wet-fr.js";
  computedOptions.soyUtilsScriptUrl =
    options.soyUtilsScriptUrl ??
    "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/soyutils.js";
  computedOptions.jqScriptUrl =
    options.jqScriptUrl ??
    "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/js/jquery/2.2.4/jquery.min.js";
  computedOptions.themeCssUrl =
    options.themeCssUrl ??
    "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/css/theme.min.css";
  computedOptions.themeScriptUrl =
    options.themeScriptUrl ??
    "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/js/theme.min.js";
  computedOptions.wetScriptUrl =
    options.wetScriptUrl ??
    "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/js/wet-boew.min.js";
  computedOptions.termsEng =
    options.termsEng ?? "https://www.canada.ca/en/transparency/terms.html";
  computedOptions.termsFra =
    options.termsFra ?? "https://www.canada.ca/fr/transparence/avis.html";
  computedOptions.nameEng = options.nameEng ?? "Government of Canada";
  computedOptions.nameFra = options.nameEng ?? "Gouvernement du Canada";

  return computedOptions;
}

function determineLanguage(basePath: WetOptions["basePath"]) {
  if (
    window.location.href.startsWith(window.location.origin + basePath + "en")
  ) {
    return "en";
  }
  if (
    window.location.href.startsWith(window.location.origin + basePath + "fr")
  ) {
    return "fr";
  }
  return null;
}

interface WetBoew {
  selectors: string[];
  start: () => void;
}

const shareOptions = ["email", "facebook", "linedin", "twitter"] as const;

type Href = `${
  | "http://"
  | "https://"
  | "mailto:"
  | "/"
  | "../"
  | "./"
  | "#"}${string}`;

type Src = `${"http://" | "https://" | "/" | "../" | "./"}${string}`;

enum LanguagePlacement {
  QUERYSTRING,
  PATH,
}

/**
 * CDTS Options for Wet-Boew. All options are optional.
 * Sensible defaults will be used to get you up and running quickly. However, it
 * is highly recommended that you tweak this to suit your needs.
 * @ref https://cenw-wscoe.github.io/sgdc-cdts/docs/internet-en.html
 *
 * @interface WetOptions
 */
interface WetOptions {
  /**
   * Which template to use for the current page.
   *
   * `transactional` - Transactional pages are to be used under specific scenarios as detailed in section 6.5 of the [C&IA specifications document](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-information-architecture-specification.html).
   *
   * Extract: *"Users are engaged in a transactional process where allowing them to navigate away from the current page would interrupt the intended flow and result in errors, loss of data or accidental termination of the session"*
   *
   * `default` - The content page template. Will be different depending on wether
   * or not isApplication is set to `true`
   *
   * Examples:
   *
   * [Standard default](https://cenw-wscoe.github.io/sgdc-cdts/GCWeb/samples/content-en.html) |
   * [Application default](https://cenw-wscoe.github.io/sgdc-cdts/GCWeb/appTop/apptop-en.html)
   *
   * `section-menu` - A page with an additional menu or menus on the left. [Demo](https://cenw-wscoe.github.io/sgdc-cdts/GCWeb/samples/sectionmenu-en.html)
   *
   * @type {("transactional" | "section-menu" | "default")}
   * @memberof WetOptions
   */
  template?: "default" | "section-menu" | "splash" | "transactional";

  /**
   * Location of the `favicon.ico` file.
   *
   * Defaults to `https://www.canada.ca/etc/designs/canada/wet-boew/assets/favicon.ico`
   *
   * @type {Href}
   * @memberof WetOptions
   */
  favicon?: Href;

  /**
   * Root path of your site or app.
   *
   * Defaults to `/`
   *
   * @type null
   * @memberof WetOptions
   */
  basePath?: Src;

  /**
   * Location of the soyutils.js script.
   *
   * Defaults to https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/soyutils.js
   *
   * @type {Src}
   * @memberof WetOptions
   */
  soyUtilsScriptUrl?: Src;

  /**
   * Location of the English version of the CDTS script.
   *
   * Defaults to `https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/wet-en.json`
   *
   * @type {Src}
   * @memberof WetOptions
   */
  cdtsScriptUrlEng?: Src;

  /**
   * Location of the French version of the CDTS script.
   *
   * Defaults to `https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/wet-fr.json`
   *
   * @type {Src}
   * @memberof WetOptions
   */
  cdtsScriptUrlFra?: Src;

  /**
   * Location of the CDTS App CSS file.
   *
   * Defaults to https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/cdtsapps.css
   *
   * @type {Src}
   * @memberof WetOptions
   */
  cdtsAppCssUrl?: Src;

  /**
   * Location of the wet-boew script.
   *
   * Defaults to "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/js/wet-boew.min.js";
   *
   * @type {Src}
   * @memberof WetOptions
   */
  wetScriptUrl?: Src;

  /**
   * Location of the wet-boew script.
   *
   * Defaults to "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/js/theme.min.js";
   *
   * @type {Src}
   * @memberof WetOptions
   */
  themeScriptUrl?: Src;

  /**
   * Location of the Theme CSS file.
   *
   * Defaults to https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/css/theme.min.css
   *
   * @type {Src}
   * @memberof WetOptions
   */
  themeCssUrl?: Src;

  /**
   * Specify which environment you are currently using
   *
   * @type {"prod" |"esdcqat" | "esdcnonprod" | "esdcprod" | string}
   * @memberof WetOptions
   */
  cdnEnv?: "prod" | "esdcqat" | "esdcnonprod" | "esdcprod" | string;

  /**
   * Include Adobe Analytics (AA)
   *
   * @type {({
   *     environment: "staging" | "production";
   *     version: 1 | 2;
   *   })}
   * @memberof WetOptions
   */
  webAnalytics?: {
    /**
     * Required. State if the AA running is either staging or production
     *
     * @type {("staging" | "production")}
     */
    environment: "staging" | "production";
    /**
     * Required. State which version of AA your application / site uses
     *
     * @type {(1 | 2)}
     */
    version: 1 | 2;
  };

  /**
   * Specify where the language toggle link will go.
   *
   * Defaults to `/en` and `/fr`
   *
   * @type {({ lang: "fr" | "en"; href: Href; text: string }[])}
   * @memberof WetOptions
   */
  lngLinks?: { lang: "fr" | "en"; href: Href; text: string }[];

  /**
   * Specify the breadcrumbs in your page.
   *
   * Note that if no breadcrumbs are specified the template will insert
   * a link to the home page of the Canada.ca website.
   *
   * @type {{ title: string; href: Href; acronym?: string }[]}
   * @memberof WetOptions
   */
  breadcrumbs?: { title: string; href: Href; acronym?: string }[];

  /**
   * This will be used by Principal Publisher to insert content into the
   * pre content space of your page.
   *
   * By default this is ALWAYS shown on all pages.
   *
   * You will need authorization from the Principal Publisher to not include
   * this content in your web asset.
   *
   * If you receive such authorization then you can set this to `false`.
   *
   * @type {boolean}
   * @memberof WetOptions
   */
  showPreContent?: boolean;

  /**
   * This will be used by the Principal Publisher to insert content into the
   * post content space of your page.
   *
   * By default this is ALWAYS shown on all pages.
   *
   * You will need authorization from the Principal Publisher to not include
   * this content in your web asset.
   *
   * If you receive such authorization then you can set this to `false`.
   *
   * @type {boolean}
   * @memberof WetOptions
   */
  showPostContent?: boolean;

  /**
   * Specify the share button of your page.
   *
   * @type {(false | Partial<typeof shareOptions[number]>[])}
   * @memberof WetOptions
   */
  showShare?: false | Partial<typeof shareOptions[number]>[];

  /**
   * Specify the “Report a problem or mistake on this page” button of your page.
   * By default this button is shown with the default Canada.ca URL.
   * You can customize the URL or simply hide the button.
   *
   * @type {(boolean | Href)}
   * @memberof WetOptions
   */
  showFeedback?: boolean | Href;

  /**
   * Specify the screen identifier of the web application.
   *
   * @type {string}
   * @memberof WetAppOptions
   */
  screenIdentifier?: string;

  /**
   * Specify the date modified of your page.
   * If you prefer to use the version identifier technique,
   * set `versionIdentifier` instead.
   *
   * Note that if `versionIdentifier` is set this value will be ignored.
   *
   * @type {Date}
   * @memberof WetOptions
   */
  dateModified?: Date;

  /**
   * Specify the version of the web application instead of `dateModified`.
   *
   * @type {string}
   * @memberof WetOptions
   */
  versionIdentifier?: string;

  /**
   * Remove the `<div class="pagedetails">` when using the
   * server message page template.
   *
   * @type {boolean}
   * @memberof WetOptions
   */
  pagedetails?: boolean;

  /**
   * Customize the contact us link located in the footer of the page.
   *
   * @type {{ href: Href }[]}
   * @memberof WetOptions
   */
  contactLinks?: { href: Href }[];

  /**
   * Include web application specific CSS file. Defaults to `false`.
   *
   * @type {boolean}
   * @memberof WetOptions
   */
  isApplication?: boolean;

  /**
   * Use this variable if you want to warn the users
   * they are leaving a secured session.
   *
   * @type {boolean}
   * @memberof WetOptions
   */
  exitScript?: boolean;

  /**
   * Specify the URL where the users will be redirected
   * to leave their secured session.
   *
   * @type {Href}
   * @memberof WetOptions
   */
  exitUrl?: Href;

  /**
   * Specify the text for the button (Cancel) the users will
   * get if they want to close the exitMsg window.
   *
   * @type {string}
   * @memberof WetOptions
   */
  cancelMessage?: string;

  /**
   * Specify the text for the button (Yes) the users will get
   * if they want to close the exitMsg window.
   *
   * @type {string}
   * @memberof WetOptions
   */
  yesMsg?: string;

  /**
   * Specify the additional domains that should not be checked for secure exit.
   *
   * @type {(Href|Href[])}
   * @memberof WetOptions
   */
  exitDomains?: Href | Href[];

  /**
   * Set this `false` if you want to skip the modal dialog to confirm the
   * exit notice. Keep in mind this will not display the exit notice to the user.
   *
   * @type {boolean}
   * @memberof WetOptions
   */
  displayModal?: boolean;

  /**
   * Url from which to load jQuery.js
   *
   * Defaults to https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/js/jquery/2.2.4/jquery.min.js
   *
   * @type {Src}
   * @memberof WetOptions
   */
  jqScriptUrl?: Src;

  /**
   * **Do not set this**. The english index page will always be `basePath` + `en`
   * For example if your base path is `/` the english index will be `/en`.
   * @type {never}
   * @memberof WetOptions
   */
  indexEng?: never;

  /**
   * **Do not set this**. The french index page will always be `basePath` + `fr`
   * For example if your base path is `/` the english index will be `/fr`.
   * @type {never}
   * @memberof WetOptions
   */
  indexFra?: never;

  /**
   * English terms and conditions.
   *
   * Defaults to: https://www.canada.ca/en/transparence/terms.html
   *
   * @type {Href}
   * @memberof WetOptions
   */
  termsEng?: Href;

  /**
   * French terms and conditions.
   *
   * @type {Href}
   * @memberof WetOptions
   */
  termsFra?: Href;

  /**
   * Used to brand the splash page with the web asset’s name (in English).
   *
   * If not used, the default “Government of Canada” will appear.
   *
   * @type {string}
   * @memberof WetOptions
   */
  nameEng?: string;

  /**
   * Used to brand the splash page with the web asset’s name (in French).
   *
   * If not used, the default “Gouvernement du Canada” will appear.
   *
   * @type {string}
   * @memberof WetOptions
   */
  nameFra?: string;
}

const defaultOptions: WetOptions = {
  isApplication: false,
  showPreContent: true,
  showPostContent: true,
  showShare: ["email", "facebook", "linedin", "twitter"],
  dateModified: new Date(),
  lngLinks: [
    {
      lang: "en",
      href: "/en",
      text: "English",
    },
    {
      lang: "fr",
      href: "/fr",
      text: "Français",
    },
  ],
  // languagePlacement: LanguagePlacement.PATH,
  termsEng: "https://www.canada.ca/en/transparency/terms.html",
  termsFra: "https://www.canada.ca/fr/transparence/avis.html",
};

export default function Wet({
  children,
  ...props
}: PropsWithChildren<WetOptions>) {
  const options = computeWetOptions(props);
  const { translatedPage } = useLanguage();
  const currentLanguage = determineLanguage(options.basePath);
  const contentSplash = useRef(null);
  const defTop = useRef(null);
  const defFooter = useRef(null);
  const defPreFooter = useRef(null);

  useLayoutEffect(() => {
    const soyScript = document.createElement("script");
    const cdtsScript = document.createElement("script");
    window.addEventListener("load", () => {
      //setStyle({ display: "block" });
    });
    cdtsScript.onload = () => {
      const wet = (window as any).wet;
      wet.builder.splashTop({});
      // const defTop = window.document.getElementById("def-top");
      if (contentSplash.current != null) {
        ((contentSplash.current as any) as HTMLDivElement).innerHTML = wet.builder.splash(
          {
            indexEng: "/en/",
            indexFra: "/fr/",
            termsEng: "https://www.canada.ca/en/transparency/terms.html",
            termsFra: "https://www.canada.ca/fr/transparence/avis.html",
            nameEng: "My web asset",
            nameFra: "Mon actif web",
          }
        );
      }

      // defTop!.outerHTML = wet.builder.top({
      //   lngLinks: [
      //     {
      //       lang: currentLanguage ?? "en",
      //       href: currentLanguage === "fr" ? "/en" : "/fr",
      //       text: currentLanguage === "fr" ? "English" : "Français",
      //     },
      //   ],
      //   appName: [
      //     {
      //       text: "Application name",
      //       href: "#",
      //     },
      //   ],
      //   customSearch: "customSearch",
      // });

      // var defFooter = document.getElementById("def-footer");
      // defFooter!.outerHTML = wet.builder.appFooter({});
      // var defPreFooter = document.getElementById("def-preFooter");
      // defPreFooter!.outerHTML = wet.builder.preFooter({
      //   dateModified: "2017-06-05",
      // });
    };

    soyScript.src =
      "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/soyutils.js";

    cdtsScript.src = `https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/wet-${
      currentLanguage ?? "en"
    }.js`;

    soyScript.onload = () => {
      document.head.appendChild(cdtsScript);
    };

    document.head.appendChild(soyScript);
  });

  return (
    <div>
      <Helmet>
        <title>Canada.ca</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF000" />
        <meta
          name="description"
          content="Web Experience Toolkit (WET) includes reusable components for building and maintaining innovative Web sites that are accessible, usable, and interoperable. These reusable components are open source software and free for use by departments and external Web communities"
        ></meta>
        <link rel="apple-touch-icon" href="favicon-mobile.png" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          hrefLang={currentLanguage ?? "en"}
          href={translatedPage}
        ></link>
        <link rel="manifest" href="/manifest.json" />

        <link
          rel="stylesheet"
          href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/cdtsapps.css"
        />
        <link
          rel="stylesheet"
          href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/css/theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/css/messages.min.css"
        />
      </Helmet>
      {currentLanguage == null ? (
        <div id="splashContent" ref={contentSplash}></div>
      ) : (
        <>
          <div id="def-top" ref={defTop}></div>
          <Container>
            <div id="def-preFooter" ref={defPreFooter}></div>
          </Container>

          <div id="def-footer" ref={defFooter}></div>
        </>
      )}
    </div>
  );
}
