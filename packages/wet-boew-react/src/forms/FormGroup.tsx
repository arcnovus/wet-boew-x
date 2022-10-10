import { forwardRef } from "react";

type HtmlDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const FormGroup = forwardRef<HTMLDivElement, HtmlDivProps>(
  ({ children, ...props }: HtmlDivProps, ref) => (
    <div className="form-group" ref={ref} {...props}>
      {children}
    </div>
  )
);
