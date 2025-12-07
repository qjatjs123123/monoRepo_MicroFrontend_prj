import React from "react";
import { Suspense } from "react";
import { FinanceSkeleton } from "./FinanceSkeleton";
import { Layout } from "@monorepo/ui";

const Mfe_Finance = React.lazy(() => import("mfe_finance/Finance"));

export function Finance() {
  return (
    <>
      <Suspense
        fallback={
          <Layout>
            <FinanceSkeleton />
          </Layout>
        }
      >
        <Mfe_Finance />
      </Suspense>
    </>
  );
}
