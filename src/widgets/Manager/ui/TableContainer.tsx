"use client";
import { CheckProvider } from "@/features/Manager/checkFavoriteCompany";
import { TableTitle } from "./common/TableTitle";
import { useGetFavoriteList } from "@/entities/Manager";
import { TableEntry } from "./common/TableEntry";

export function TableContainer() {
  const { data } = useGetFavoriteList();

  return (
    <>
      <CheckProvider data={data}>
        <TableTitle />
        <TableEntry data={data}/>
      </CheckProvider>
    </>
  );
}
