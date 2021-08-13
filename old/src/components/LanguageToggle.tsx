import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../i18n";
import { LanguageCodePlacement } from "../i18n/language-utils";
import Section from "./Section";

export default function LanguageToggle({
  placement,
}: {
  placement: LanguageCodePlacement;
}) {
  const { t } = useTranslation(["languageToggle"]);
  const { translatedPage } = useLanguage({
    placement,
  });
  return (
    <Section id="wb-lng" xs={3} sm={12} className="pull-right text-right">
      <h2 className="wb-inv">{t("title")}</h2>
      <ul className="list-inline mrgn-bttm-0">
        <li>
          <a
            lang={t("code")}
            hrefLang={t("code")}
            href={translatedPage}
            target="_self"
          >
            <span className="hidden-xs">{t("name")}</span>
            <abbr
              title={t("name")}
              className="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase"
            >
              {t("code")}
            </abbr>
          </a>
        </li>
      </ul>
    </Section>
  );
}
