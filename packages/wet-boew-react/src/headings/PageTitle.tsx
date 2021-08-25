import { PropsWithChildren, HTMLAttributes } from "react";
import { useDocumentTitle } from "../cdts";

export const PageTitle = (props: { text: string }) => {
  useDocumentTitle(props.text);
  return (
    <h1 property="name" id="wb-cont">
      {props.text}
    </h1>
  );
};
