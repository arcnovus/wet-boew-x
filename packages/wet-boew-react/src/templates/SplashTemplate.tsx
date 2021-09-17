import {
  SplashContentProps,
  SplashTopProps,
  SplashTop,
  SplashContent,
  useDocumentTitle,
} from "../cdts";

export type SplashTemplateProps = SplashContentProps & SplashTopProps;

export function SplashTemplate(props: SplashTemplateProps) {
  useDocumentTitle();
  return (
    <>
      <SplashTop {...props} />
      <SplashContent {...props} />
    </>
  );
}
