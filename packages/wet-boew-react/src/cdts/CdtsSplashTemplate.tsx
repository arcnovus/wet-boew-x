import CdtsSplashContent, { CdtsSplashContentProps } from "./CdtsSplashContent";
import CdtsSplashTop, { CdtsSplashTopProps } from "./CdtsSplashTop";
import { useCdtsPageTitle } from "./useCdtsPageTitle";

export type CdtsSplashTemplateProps = {
  title?: string;
} & CdtsSplashContentProps &
  CdtsSplashTopProps;

export default function CdtsSplashTemplate(props: CdtsSplashTemplateProps) {
  useCdtsPageTitle(props.title);
  return (
    <>
      <CdtsSplashTop {...props} />
      <CdtsSplashContent {...props} />
    </>
  );
}
