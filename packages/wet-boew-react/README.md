# WET-BOEW-REACT

## [**📔 Click here for full documentation**](https://wbr-docs.vercel.app/)

WET-BOEW-REACT (WBR) is a component library that enables web developers to use the Government
of Canada's [Web Experience Toolkit (WET)](https://wet-boew.github.io/wet-boew/)
and [Centrally Deployed Template System (CDTS)](https://cenw-wscoe.github.io/sgdc-cdts/)
with [React JS](https://reactjs.org), including [Create React App](https://create-react-app.dev/)
and [NextJS](https://nextjs.org).

## 🚨🚨 DISCLAIMER 🚨🚨

**This is an independent, experimental, open source project that is not
officially supported or endorsed by the Government of Canada at this time.
Use at your own risk.**

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
