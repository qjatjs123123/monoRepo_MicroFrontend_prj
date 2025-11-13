import { CheckProvider } from "@/features/Manager/checkFavoriteCompany";
import { TableTitle } from "./common/TableTitle";
import { TableContent } from "./common/TableContent";
import { FavoriteCompanyList } from "@/entities/Manager";

export function TableContainer({ data }: { data: FavoriteCompanyList }) {
  return (
    <CheckProvider data={data}>
      <TableTitle />
      <TableContent data={data} />
    </CheckProvider>
  );
}
