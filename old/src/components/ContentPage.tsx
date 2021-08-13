import { PropsWithChildren } from "react";
import { useLanguage } from "../i18n";
import { languageCodePlacement } from "../i18n/language-utils";
import CanadaMenu from "./CanadaMenu";
import LanguageToggle from "./LanguageToggle";
import Main from "./Main";
import PageTitle from "./PageTitle";
import Search from "./Search";
import SkipTo from "./SkipTo";
import TopBanner from "./TopBanner";
import TopLogo from "./TopLogo";

interface ContentPageProps {
  topMenu?: JSX.Element;
  title: string;
}

export default function ContentPage(
  props: PropsWithChildren<ContentPageProps>
) {
  const { currentLanguage } = useLanguage();
  return (
    <div>
      <SkipTo links={[{ anchor: "wb-cont", label: "main" }]} />
      <header>
        <TopBanner>
          <LanguageToggle placement={languageCodePlacement.QUERYSTRING} />
          <TopLogo language={currentLanguage ?? "en"} />
          <Search
            title="Search Wet"
            placeholder="Search it up!"
            onSearchChange={console.log}
            onSearchSubmit={console.log}
          />
        </TopBanner>
        <CanadaMenu />
      </header>
      <Main>
        <PageTitle title={props.title} />
        {props.children}
      </Main>
    </div>
  );
}
