import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function PageTitle({
  title,
}: PropsWithChildren<{ title: string }>) {
  const { t } = useTranslation(["meta"]);
  return (
    <>
      <Helmet>
        <title>
          {title} - {t("appName")}
        </title>
      </Helmet>
      <h1 property="name" id="wb-cont">
        {title}
      </h1>
    </>
  );
}
