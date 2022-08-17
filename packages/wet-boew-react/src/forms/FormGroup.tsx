type HtmlDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function FormGroup({ children, ...props }: HtmlDivProps) {
  return (
    <div className="form-group" {...props}>
      {children}
    </div>
  );
}
