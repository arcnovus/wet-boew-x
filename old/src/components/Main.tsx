import React from "react";

export default function Main({ children }: React.PropsWithChildren<unknown>) {
  return (
    <main
      property="mainContentOfPage"
      resource="#wb-main"
      className="container"
      typeof="WebPageElement"
    >
      {children}
    </main>
  );
}
