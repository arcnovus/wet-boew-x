import {
  DefaultTemplate,
  PageTitle,
  useLngLinks,
} from "@arcnovus/wet-boew-react";
import { useRouter } from "next/router";
export default function Home() {
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
  const { locale } = useRouter();
  const currentLanguage = locale.split("-")[0];
  const { lngLinks } = useLngLinks({
    currentLanguage,
    translatedPage: `/${currentLanguage == "en" ? "fr" : "en"}/home/`,
  });

  return (
    <DefaultTemplate lngLinks={lngLinks}>
      <PageTitle text={labels[currentLanguage].title} />
      <p>{labels[currentLanguage].contents}</p>
    </DefaultTemplate>
  );
}
