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
  let hasTitle = title != null;
  let hasFooter = footer != null;

  if (typeof title === "string" && title.trim().length === 0) {
    hasTitle = false;
  }

  if (typeof footer === "string" && footer.trim().length === 0) {
    hasFooter = false;
  }

  return (
    <div className={cssClass}>
      {hasTitle && <PanelTitle>{title}</PanelTitle>}
      {fullWidth ? <>{children}</> : <PanelBody>{children}</PanelBody>}
      {hasFooter && <PanelFooter>{footer}</PanelFooter>}
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

export { Panel };
export { PanelBody as PanelPaddedContent };
