import React from "react";
import CheckBox from "@/shared/ui/CheckBox/CheckBox";
import { TrashIcon } from "@/shared/ui/Icon/TrashIcon";
import { Table } from "@/shared/ui/Table/Table";
import { FavoriteCompany } from "../model/favorites-list";

interface FavoriteCompanyCellProps {
  item: FavoriteCompany;
  checked: boolean;
  onChange: (id: number) => void;
}

export const FavoriteCompanyCell = React.memo(function FavoriteCompanyCell({
  item,
  checked,
  onChange,
}: FavoriteCompanyCellProps) {
  return (
    <Table.Row checked={checked}>
      <Table.Cell align="center">
        <CheckBox checked={checked} onChange={() => onChange(item.id)} />
      </Table.Cell>
      <Table.Cell>{item.company_name}</Table.Cell>
      <Table.Cell>{item.created_at}</Table.Cell>
      <Table.Cell>
        <TrashIcon />
      </Table.Cell>
    </Table.Row>
  );
});
