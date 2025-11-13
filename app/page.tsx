import { getFavoritesList } from "@/entities/Manager/api/get-favorites-list";
import { Banner } from "@/shared/ui/Banner/Banner";
import { TableContent, TableTitle } from "@/widgets/Manager";

export default async function Home() {
  const favorites = await getFavoritesList({
    email: "test@example.com",
    page: "1",
  });

  return (
    <>
      <Banner title="관심기업 관리 서비스" />

      <TableTitle />
      <TableContent data={favorites} />
    </>
  );
}
