import { useTranslation } from "react-i18next";
import { useWetComponent } from "../wet";
import Container from "./Container";

export default function CanadaMenu() {
  const { t } = useTranslation(["canadaMenu"]);
  useWetComponent(".gcweb-menu");

  return (
    <nav className="gcweb-menu" typeof="SiteNavigationElement">
      <Container>
        <h2 className="wb-inv">{t("label")}</h2>
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          aria-label={t("ariaLabel")}
        >
          Menu
          <span className="expicon glyphicon glyphicon-chevron-down"></span>
        </button>
        <ul
          role="menu"
          aria-orientation="vertical"
          // data-ajax-replace={t("url")}
        />
      </Container>
    </nav>
  );
}
