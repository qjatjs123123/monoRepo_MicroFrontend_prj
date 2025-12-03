import React, { Suspense } from "react";
import BannerSkeleton from "./BannerSkeleton";

const Mfe_Banner = React.lazy(() => import("mfe_banner/Banner"));

export function Banner({title} : {title: string}) {
  return (
    <Suspense fallback={<BannerSkeleton />}>
      <Mfe_Banner title={title} />
    </Suspense>
  );
}
