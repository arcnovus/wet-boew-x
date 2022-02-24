import {
  AppTemplate,
  PageTitle,
  SplashTemplate,
  WetProvider,
  useLanguage,
} from "@arcnovus/wet-boew-react";
import { useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function App() {
  const { currentLanguage } = useLanguage(useLocation());
  const history = useHistory();
  const labels = {
    en: {
      title: "A Title",
      contents: "Hello, World!",
      appName: "Some awesome app.",
    },
    fr: {
      title: "Un Titre",
      contents: "Bonjour!",
      appName: "Une application merveilleuse.",
    },
  };
  const handleClick = useCallback(
    (a) => {
      history.push(a.href.replace(window.location.origin, ""));
    },
    [history]
  );
  return (
    <WetProvider linkHandler={handleClick}>
      {currentLanguage == null ? (
        <SplashTemplate
          nameEng={labels.en.appName}
          nameFra={labels.fr.appName}
        />
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
          <a href="/robots.txt" download="robots.txt" target="_blank">
            Download
          </a>
        </AppTemplate>
      )}
    </WetProvider>
  );
}
