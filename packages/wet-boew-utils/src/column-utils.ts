export type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnPosition = ColumnSpan;

export interface ColumnSpanProps {
  xs?: ColumnSpan;
  sm?: ColumnSpan;
  md?: ColumnSpan;
  lg?: ColumnSpan;
}

export interface ColumnOffsetProps {
  xsoffset?: ColumnPosition;
  smoffset?: ColumnPosition;
  mdoffset?: ColumnPosition;
  lgoffset?: ColumnPosition;
}

export interface ColumnPullProps {
  xspull?: ColumnPosition;
  smpull?: ColumnPosition;
  mdpull?: ColumnPosition;
  lgpull?: ColumnPosition;
}

export interface ColumnPushProps {
  xspush?: ColumnPosition;
  smpush?: ColumnPosition;
  mdpush?: ColumnPosition;
  lgpush?: ColumnPosition;
}

export type ColumnProps = ColumnSpanProps &
  ColumnPushProps &
  ColumnPullProps &
  ColumnOffsetProps & {
    className?: string;
  };

export function computeColumnCssClass(props: ColumnProps) {
  const span = computeSpan(props);
  const offset = computeOffset(props);
  const pull = computePull(props);
  const push = computePush(props);

  return `${offset} ${pull} ${push} ${span} ${props.className ?? ""}`.trim();
}

function computeSpan(props: ColumnSpanProps) {
  const xsClass = props.xs ? `col-xs-${props.xs}` : "";
  const smClass = props.sm ? `col-sm-${props.sm}` : "";
  const mdClass = props.md ? `col-md-${props.md}` : "";
  const lgClass = props.lg ? `col-lg-${props.lg}` : "";

  return `${xsClass} ${smClass} ${mdClass} ${lgClass}`.trim();
}

function computeOffset(props: ColumnOffsetProps) {
  const xsOffsetClass = props.xsoffset ? `col-xs-offset-${props.xsoffset}` : "";
  const smOffsetClass = props.smoffset ? `col-sm-offset-${props.smoffset}` : "";
  const mdOffsetClass = props.mdoffset ? `col-md-offset-${props.mdoffset}` : "";
  const lgOffsetClass = props.lgoffset ? `col-lg-offset-${props.lgoffset}` : "";
  return `${xsOffsetClass} ${smOffsetClass} ${mdOffsetClass} ${lgOffsetClass}`.trim();
}

function computePull(props: ColumnPullProps) {
  const xsPullClass = props.xspull ? `col-xs-pull-${props.xspull}` : "";
  const smPullClass = props.smpull ? `col-sm-pull-${props.smpull}` : "";
  const mdPullClass = props.mdpull ? `col-md-pull-${props.mdpull}` : "";
  const lgPullClass = props.lgpull ? `col-lg-pull-${props.lgpull}` : "";
  return `${xsPullClass} ${smPullClass} ${mdPullClass} ${lgPullClass}`.trim();
}

function computePush(props: ColumnPushProps) {
  const xsPushClass = props.xspush ? `col-xs-push-${props.xspush}` : "";
  const smPushClass = props.smpush ? `col-sm-push-${props.smpush}` : "";
  const mdPushClass = props.mdpush ? `col-md-push-${props.mdpush}` : "";
  const lgPushClass = props.lgpush ? `col-lg-push-${props.lgpush}` : "";
  return `${xsPushClass} ${smPushClass} ${mdPushClass} ${lgPushClass}`.trim();
}
