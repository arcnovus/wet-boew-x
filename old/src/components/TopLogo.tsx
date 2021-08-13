import React from "react";
import Column from "./Column";

const logos = {
  en: {
    image:
      "https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_39/assets/sig-blk-en.svg",
    alt: "Governement of Canada",
    href: "https://www.canada.ca/en.html",
    translation: "Gouvernment du Canada",
  },
  fr: {
    image:
      "https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_39/assets/sig-blk-fr.svg",
    alt: "Gouvernement du Canada",
    href: "https://www.canada.ca/fr.html",
    translation: "Government of Canada",
  },
};

export default function TopLogo(props: { language: "en" | "fr" | null }) {
  let language = props.language || "en";
  return (
    <Column
      xs={9}
      sm={5}
      md={4}
      className="brand"
      property="publisher"
      resource="#wb-publisher"
      typeof="GovernmentOrganization"
    >
      <a href={logos[language].href} property="url" id="logo-link">
        <img
          src={logos[language].image}
          alt={logos[language].alt}
          property="logo"
          id="logo-image"
        />
        <span className="wb-inv">
          /<span lang={language}>{logos[language].translation}</span>
        </span>
      </a>
      <meta property="name" content={logos[language].alt} />
      <meta property="areaServed" typeof="Country" content="Canada" />
      <link
        property="logo"
        href={`https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-${language}.svg`}
      />
    </Column>
  );
}
