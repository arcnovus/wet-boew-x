# WET-BOEW-REACT

## 🚨🚨 DISCLAIMER 🚨🚨

**This library is in use at several Government of Canada departments; however,
it remains an independent, experimental, open source project that is not
officially supported or endorsed by the Government of Canada at this time.
Use at your own risk.**

## [**📔 Click here for full documentation**](https://wbr-docs.vercel.app/)

WET-BOEW-REACT (WBR) is a component library that enables web developers to use the Government
of Canada's [Web Experience Toolkit (WET)](https://wet-boew.github.io/wet-boew/)
and [Centrally Deployed Template System (CDTS)](https://cenw-wscoe.github.io/sgdc-cdts/)
with [React JS](https://reactjs.org), including [Create React App](https://create-react-app.dev/)
and [NextJS](https://nextjs.org).

## Contents

- [Quickstart](#quickstart)
  - [CRA](#using-the-create-react-app-example-as-a-starting-point)
  - [NextJS](#using-the-nextjs-example-as-a-starting-point)
- [Create React App from scratch](#create-react-app-from-scratch)
- [NextJS from Scratch](#nextjs-from-scratch-typescript)
- [Architecture](#architecture)

## Quickstart

The fastest way to get started is to clone this library's github repository,
copy one of the example projects to a new folder and start editing.

Current example projects include:

- [create-react-app example](https://github.com/arcnovus/wet-booew-x/tree/main/examples/create-react-app) – Create React App with react-router-dom and react-i18next.
- [nextjs example](https://github.com/arcnovus/wet-booew-x/tree/main/examples/nextjs) – NextJS App with next-i18next and TypeScript.

### Using the Create-React-App example as a starting point

```bash
mkdir my-app
cd my-app
git clone https://github.com/arcnovus/wet-boew-x.git temp
cp -r temp/examples/create-react-app/* .
rm -rf temp
```

### Using the NextJS example as a starting point

```bash
mkdir my-app
cd my-app
git clone https://github.com/arcnovus/wet-boew-x.git temp
cp -r temp/examples/nextjs/* .
rm -rf temp
```

Then, you can start editing the files in the `src` folder.

## Create React App from scratch

Open a terminal and use [Create React App (CRA)](https://create-react-app.dev/) to bootstrap a new React
application and then install `wet-boew-react`.

```bash
npx create-react-app my-app
cd my-app
npm i @arcnovus/wet-boew-react
```

Open your new app with your favorite code editor and replace the contents of
`src/App.js` with the code below:

```jsx
import {
  DefaultTemplate,
  PageTitle,
  SplashTemplate,
  WetProvider,
  useLanguage,
} from "@arcnovus/wet-boew-react";

export default function App() {
  const { currentLanguage } = useLanguage();
  const labels = {
    en: {
      title: "My Title",
      contents: "Hello, World!",
    },
    fr: {
      title: "Mon Titre",
      contents: "Bonjour!",
    },
  };

  return (
    <WetProvider>
      {currentLanguage == null ? (
        <SplashTemplate />
      ) : (
        <DefaultTemplate>
          <PageTitle text={labels[currentLanguage].title} />
          <p>{labels[currentLanguage].contents}</p>
        </DefaultTemplate>
      )}
    </WetProvider>
  );
}
```

Go back to your terminal window and preview your app with the following command.

```bash
npm run start
```

## NextJS from Scratch (TypeScript)

1. Open a terminal and use [NextJS](https://nextjs.org/) to bootstrap a new NextJS
   application and then install `wet-boew-react` and `next-transpile-modules`.

```bash
npx create-next-app my-app --typescript
cd my-app
npm i @arcnovus/wet-boew-react next-transpile-modules react@17.0.2 react-dom@17.0.2
npm i @types/node -D
```

2. Open `next.config.js` with your favorite code editor and replace the contents with:

```js
/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@arcnovus/wet-boew-react"]);
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
};
module.exports = withTM(nextConfig);
```

3. Open `pages/_app.tsx` with your favorite code editor and replace the contents with:

```tsx
import type { AppProps } from "next/app";
import { useCallback, useEffect, useState } from "react";
import { WetProvider, Language } from "@arcnovus/wet-boew-react";
import { useRouter } from "next/router";

export default function WetForNextJsAppp({ Component, pageProps }: AppProps) {
  const [isServerSide, setIsServerSide] = useState(true);
  const router = useRouter();
  const currentLanguage =
    (router.locale?.split("-")[0] as Language) ?? Language.EN;
  const handleLink = useCallback(
    (a: HTMLAnchorElement) => {
      const relativeUrl = a.href.replace(window.location.origin, "");
      const asUrl = `/${currentLanguage}${relativeUrl}`;
      router.push(relativeUrl, asUrl, {
        shallow: false,
        locale: router.locale,
      });
    },
    [router, currentLanguage]
  );

  useEffect(() => {
    setIsServerSide(false);
  }, []);

  // this will suppress the useLayoutEffect warnings.
  if (isServerSide) {
    // You can show some kind of placeholder UI here
    return null;
  }

  return (
    <WetProvider language={currentLanguage} linkHandler={handleLink}>
      <Component {...pageProps} />
    </WetProvider>
  );
}
```

4. Modify `pages/index.tsx` to match the following:

```tsx
import { SplashTemplate } from "@arcnovus/wet-boew-react";

export default function Index() {
  const labels = {
    en: {
      appName: "My NextJS app.",
    },
    fr: {
      appName: "Mon application NextJS.",
    },
  };

  return (
    <SplashTemplate
      nameEng={labels.en.appName}
      nameFra={labels.fr.appName}
      indexEng="/en/home"
      indexFra="/fr/home"
    />
  );
}
```

5. Create a new file at `pages/home.tsx` with the following contents:

```tsx
import {
  AppTemplate,
  PageTitle,
  useLngLinks,
  Language,
} from "@arcnovus/wet-boew-react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const currentLanguage =
    (router.locale?.split("-")[0] as Language) ?? Language.EN;
  const { lngLinks } = useLngLinks({
    currentLanguage,
    translatedPage: `/${
      currentLanguage == Language.EN ? Language.FR : Language.EN
    }/home/`,
  });

  const labels = {
    en: {
      title: "My NextJS app",
      intro: "Welcome",
    },
    fr: {
      title: "Mon application NextJS.",
      intro: "Bienvenue",
    },
  };

  return (
    <AppTemplate
      appName={[{ text: labels[currentLanguage].title, href: "/home" }]}
      lngLinks={lngLinks}
    >
      <PageTitle text={labels[currentLanguage].title} />
      <p>{labels[currentLanguage].intro}</p>
    </AppTemplate>
  );
}
```

Go back to your terminal window and preview your app with the following command.

```bash
npm run dev
```

### Next Steps

Consider integrating [next-18next](https://www.npmjs.com/package/next-i18next) for better bilingual support.

## Changing the layout of your app.

WBR includes five core template components which can all be
configured to achieve a variety of layouts.

The included templates are:

- `SplashTemplate` - the default Canada.ca language selection splash page template.
- `DefaultTemplate` - the default Canada.ca template.
- `DefaultSecMenuTemplate` - the default Canada.ca template with a left side navigation.
- `AppTemplate` - the CDTS application template.
- `AppSecMenuTemplate` - the CDTS application template with a left side navigation.

To use a different template, simply import it from `"@arcnovus/wet-boew-react"`
and wrap your page with it. For example, you could change the Getting Started
code from above to use the App template, like so:

```jsx
import {
  AppTemplate,
  PageTitle,
  SplashTemplate,
  WetProvider,
  useLanguage,
} from "../src";

export default function Index() {
  const { currentLanguage } = useLanguage();
  const labels = {
    en: {
      title: "My Title",
      contents: "Hello, World!",
      appName: "My awesome app.",
    },
    fr: {
      title: "Mon Titre",
      contents: "Bonjour!",
      appName: "Mon application merveilleux.",
    },
  };

  return (
    <WetProvider>
      {currentLanguage == null ? (
        <SplashTemplate />
      ) : (
        <AppTemplate
          appName={[
            {
              href: "/",
              text: labels[currentLanguage].appName,
            },
          ]}
        >
          <PageTitle text={labels[currentLanguage].title} />
          <p>{labels[currentLanguage].contents}</p>
        </AppTemplate>
      )}
    </WetProvider>
  );
}
```

## Architecture

The _wet-boew-react_ library consumes a more general library called _wet-boew-utils_.
The _wet-boew-utils_ library provides a set of plain TypeScript utilities for integrating the
Government of Canada's Web Experience Toolkit (WET) and the Centrally Deployed
Template System (CDTS) into applications built using modern web frameworks like
React, VueJS, Svelte, or Angular.

These libraries do not attempt to rewrite or re-implement WET and CDTS,
instead they consume all of the existing functionality from those projects and
makes them easier to use in a modern application.

### WET-BOEW-REACT

The _wet-boew-react_ library is written in TypeScript and JSX/React.
It provides the following:

- A `<WetProvider>` component that wraps your application and takes care of
  injecting all required javascript and css for WET and CDTS. With this component,
  developers no longer need to manually modify their `index.html` file to include
  any `<script>` or `<link>` tags for WET or CDTS.
- Components that provide the three major templates supported by CDTS:
  - `<SplashTemplate>`for the standard Government of Canada bilingual splash page;
  - `<DefaultTemplate>` for the standard Canada.ca layout with the "mega menu"
    and standard footer; and,
  - `<AppTemplate>` for the more application focused layouts provided by the
    CDTS.
  - These template components strive to follow the same conventions as the CDTS
    components meaning that they accept the attibutes for the various CDTS sections
    (e.g. refTop, refFooter, etc...) as props to these components.
- A variety of common WET elements such as buttons, alerts, tables, and so on
  implemented as React components by leveraging the existing WET CSS and
  JavaScript libraries and following the code examples in the WET style guide.

**WET-BOEW-REACT is Free Open Source software and is available under the MIT license.
Full source code is available [here](https://github.com/arcnovus/wet-booew-x).**

### WET-BOEW-UTILS

The _wet-boew-utils_ library is written in TypeScript and provides the following:

- A CDTS Injector function that can inject all CDTS dependencies into a modern
  single page application, including: jQuery, Soy Utils, the language appropriate
  WET JavaScript library, and anything else needed by CDTS.

- An `onAnchorClick` function that allows modern frameworks to intercept `<a>` tags
  injected by CDTS and handle them properly.

- A `registerWetComponent` function that allows components to register themselves
  with the WET JavaScript library. This is useful for when a modern framework
  inserts WET components into the DOM that need to be modified by WET (for example,
  the `DataTable` component).

- Some language utility functions that make it easier to add bilingual support
  in a modern application.

**WET-BOEW-UTILS is Free Open Source software and is available under the MIT license.
Full source code is available [here](https://github.com/arcnovus/wet-booew-x).**

### CDTS

The Government of Canada's [Centrally Deployed Template System (CDTS)](https://cenw-wscoe.github.io/sgdc-cdts/)

### WET

The Government
of Canada's [Web Experience Toolkit (WET)](https://wet-boew.github.io/wet-boew/)
