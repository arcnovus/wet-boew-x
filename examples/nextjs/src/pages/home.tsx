import {
  DefaultTemplate,
  Form,
  FormGroup,
  PageTitle,
  SubmitButton,
  TextInput,
  useLngLinks,
} from "@arcnovus/wet-boew-react";
import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { MultiCheckboxSelect } from "../components/MultiCheckboxSelect";

export default function Home() {
  const currentLanguage = useCurrentLanguage();
  const { lngLinks } = useLngLinks({
    currentLanguage,
    translatedPage: `/${currentLanguage == "en" ? "fr" : "en"}/home/`,
  });
  const { t } = useTranslation("home-page");
  return (
    <DefaultTemplate lngLinks={lngLinks}>
      <PageTitle text={t("title")} />
      <p dangerouslySetInnerHTML={{ __html: t("intro") }} />
      <a href={`/${currentLanguage}/samples`}>
        <button className="btn btn-primary" type="button">
          {t("sample-pages")}
        </button>
      </a>
    </DefaultTemplate>
  );
}

// Note: You can use getServerSideProps if you also need to load dynamic data
// from an API on each page load.
export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? defaultLocale ?? "en", [
      "home-page",
    ])),
  },
});
