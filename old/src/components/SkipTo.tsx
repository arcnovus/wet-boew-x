import React from "react";
import { useTranslation } from "react-i18next";

interface SkipToLink {
  anchor: string;
  label: string;
}

export default function SkipTo({ links }: { links: SkipToLink[] }) {
  const { t } = useTranslation(["skipTo"]);
  return (
    <nav>
      <ul id="wb-tphp">
        {links.map((link) => (
          <li className="wb-slc" key={link.anchor}>
            <a
              className="wb-sl"
              href={`#${link.anchor.replace("#", "")}`}
              target="_self"
            >
              {t(link.label)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
