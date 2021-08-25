import {
  SplashContentProps,
  SplashTopProps,
  SplashTop,
  SplashContent,
} from "../cdts";

export type SplashTemplateProps = SplashContentProps & SplashTopProps;

export function SplashTemplate(props: SplashTemplateProps) {
  return (
    <>
      <SplashTop {...props} />
      <SplashContent {...props} />
    </>
  );
}
