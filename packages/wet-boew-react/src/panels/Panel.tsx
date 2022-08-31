import { PropsWithChildren, ReactNode } from "react";
import { usePanelVariant, PanelVariant } from "./usePanelVariant";

export type PanelProps = PropsWithChildren<{
  variant?: PanelVariant;
  className?: string;
  title?: ReactNode;
  footer?: ReactNode;
  fullWidth?: boolean;
}>;

function Panel({
  variant,
  children,
  title,
  footer,
  className,
  fullWidth,
}: PanelProps) {
  let variantCssClass = usePanelVariant(variant);
  let customCssClass = className ?? "";
  let cssClass = `${customCssClass} ${variantCssClass}`.trim();

  return (
    <div className={cssClass}>
      {title && <PanelTitle>{title}</PanelTitle>}
      {fullWidth ? <>{children}</> : <PanelBody>{children}</PanelBody>}
      {footer && <PanelFooter>{footer}</PanelFooter>}
    </div>
  );
}

function PanelTitle({ children }: PropsWithChildren<{}>) {
  return (
    <header className="panel-heading">
      <h5 className="panel-title">{children}</h5>
    </header>
  );
}

function PanelBody({ children }: PropsWithChildren<{}>) {
  return <div className="panel-body">{children}</div>;
}

function PanelFooter({ children }: PropsWithChildren<{}>) {
  return <footer className="panel-footer">{children}</footer>;
}

Panel.PaddedContent = PanelBody;
export { Panel };
export { PanelBody as PanelPaddedContent };
