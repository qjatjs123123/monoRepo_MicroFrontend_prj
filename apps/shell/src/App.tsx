import React, { Suspense } from "react";

const Header = React.lazy(() => import("mfe_header/Header"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading Header...</div>}>
      <Header />
    </Suspense>
  );
}
