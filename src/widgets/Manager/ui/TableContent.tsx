import { FavoriteCompanyCell, FavoriteCompanyList } from "@/entities/Manager";
import CheckBox from "@/shared/ui/CheckBox/CheckBox";
import { Table } from "@/shared/ui/Table/Table";

export function TableContent({ data }: { data: FavoriteCompanyList }) {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          <Table.Head className="px-5">
            <CheckBox disabled={true} />
          </Table.Head>
          <Table.Head width="70%">기업명</Table.Head>
          <Table.Head width="30%">생성일자</Table.Head>
          <Table.Head className="px-5"> </Table.Head>
        </Table.HeaderRow>
      </Table.Header>

      <Table.Body>
        {data.items.map((item) => (
          <FavoriteCompanyCell
            key={item.id}
            companyName={item.company_name}
            created_at={item.created_at}
          />
        ))}
      </Table.Body>
    </Table>
  );
}
