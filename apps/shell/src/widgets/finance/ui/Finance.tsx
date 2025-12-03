import React from "react";

import { Suspense } from "react";
import { FinanceSkeleton } from "./FinanceSkeleton";
import { Banner } from "@/shared/ui";

const Finance = React.lazy(() => import("mfe_finance/Finance"));

export function Header() {
  return (
    <Suspense fallback={<FinanceSkeleton />}>
      <Banner title='관심기업 관리 서비스'/>
      <Finance />
    </Suspense>
  );
}
