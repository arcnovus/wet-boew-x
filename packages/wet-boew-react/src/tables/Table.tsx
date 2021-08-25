import { HTMLAttributes, PropsWithChildren } from "react";

interface TableStyleProps {
  striped?: boolean;
  hover?: boolean;
  bordered?: boolean;
  condensed?: boolean;
  responsive?: boolean;
  className?: string;
}

export type TableProps = PropsWithChildren<
  { id: string; caption: string } & TableStyleProps &
    HTMLAttributes<HTMLTableElement>
>;

export function Table({ children, id, caption, ...props }: TableProps) {
  const tableCssClass = computeTableCssClass(props);
  const additionalProps = removeTableStyleProps(props);
  return (
    <table
      className={tableCssClass}
      {...additionalProps}
      aria-describedby={`${id}_info`}
    >
      <caption id={`${id}_info`} className="wb-inv">
        {caption}
      </caption>
      {children}
    </table>
  );
}

function removeTableStyleProps(props: TableStyleProps) {
  const {
    striped,
    hover,
    bordered,
    condensed,
    responsive,
    className,
    ...rest
  } = props ?? {};
  return rest;
}
function computeTableCssClass({
  striped,
  hover,
  bordered,
  condensed,
  responsive,
  className,
}: TableStyleProps) {
  let tableCssClass = `table ${className ?? ""}`.trim();
  if (striped) {
    tableCssClass += ` table-striped`;
  }
  if (hover) {
    tableCssClass += ` table-hover`;
  }
  if (bordered) {
    tableCssClass += ` table-bordered`;
  }
  if (condensed) {
    tableCssClass += ` table-condensed`;
  }
  if (responsive) {
    tableCssClass += ` table-responsive`;
  }
  return tableCssClass;
}
