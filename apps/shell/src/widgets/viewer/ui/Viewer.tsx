import { Banner } from "@/shared/ui";
import React, { Suspense } from "react";

const Mfe_Viewer = React.lazy(() => import("mfe_viewer/Viewer"));

export function Viewer() {
  return (
    <Suspense fallback={<></>}>
      <Banner title='기업 재무제표 조회'/>
      <Mfe_Viewer />
    </Suspense>
  );
}
