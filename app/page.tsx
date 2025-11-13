import { getFavoritesList } from "@/entities/Manager/api/get-favorites-list";
import { Banner } from "@/shared/ui/Banner/Banner";
import { TableContainer } from "@/widgets/Manager";

export default async function Home() {
  const favorites = await getFavoritesList({
    email: "test@example.com",
    page: "1",
  });

  return (
    <>
      <Banner title="관심기업 관리 서비스" />
      <TableContainer data={favorites} />
    </>
  );
}
