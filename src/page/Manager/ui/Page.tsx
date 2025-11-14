import { Banner } from "@/shared/ui/Banner/Banner";
import { TableContainer } from "@/widgets/Manager";
import { prefetchFavoriteList } from "../model/prefetchFavoriteList";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export async function Page({ page }: { page: string }) {
  const { queryClient } = await prefetchFavoriteList({
    page,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Banner title="관심기업 관리 서비스" />
      <TableContainer />
    </HydrationBoundary>
  );
}
