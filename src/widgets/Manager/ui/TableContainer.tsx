"use client";
import { CheckProvider } from "@/features/Manager/checkFavoriteCompany";
import { TableTitle } from "./common/TableTitle";
import { TableContent } from "./common/TableContent";
import { TablePagination } from "./common/TablePagination";

import { useGetFavoriteList } from "@/entities/Manager";

export function TableContainer() {
  const { data } = useGetFavoriteList();

  return (
    <>
      <CheckProvider data={data}>
        <TableTitle />
        <TableContent data={data} />
      </CheckProvider>
      <TablePagination />
    </>
  );
}
