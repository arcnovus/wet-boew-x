import { useEffect, useState } from "react";
import { WetProvider, useLanguage } from "@arcnovus/wet-boew-react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const [loadComponent, setLoadComponent] = useState(false);
  const router = useRouter();
  const { locale } = useRouter();
  const currentLanguage = locale.split("-")[0];
  console.log("next.language", currentLanguage);
  // const currentLanguage = useLanguage({ pathname: router.route });
  useEffect(() => {
    setLoadComponent(true);
  });

  if (!loadComponent) {
    // You can show some kind of placeholder UI here
    return null;
  }
  return (
    <>
      <WetProvider
        language={currentLanguage}
        linkHandler={(a) => {
          console.log("anchor clicked");
          router.push(a.href);
        }}
      >
        <Component {...pageProps} />
      </WetProvider>
    </>
  );
}

export default MyApp;
