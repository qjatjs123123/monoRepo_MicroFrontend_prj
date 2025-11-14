"use client";

import React, { ReactNode } from "react";
import { FavoriteCompanyList } from "@/entities/Manager";
import { useCheckService } from "../model/useCheckService";
import { createContext, useContext } from "react";

export interface CheckContextType {
  checkedItem: (id: number) => void;
  checkedAll: () => void;
  isAllChecked: boolean;
  isChecked: (a: number) => boolean;
  checkedIds: number[];
}

interface CheckProviderProps {
  children: ReactNode;
  data: FavoriteCompanyList;
}

export const CheckContext = createContext<CheckContextType | undefined>(
  undefined
);

export const CheckProvider = ({ children, data }: CheckProviderProps) => {
  const { checkedItem, checkedAll, isAllChecked, isChecked, checkedIds } =
    useCheckService(data);

  return (
    <CheckContext.Provider
      value={{ checkedItem, checkedAll, isAllChecked, isChecked, checkedIds }}
    >
      {children}
    </CheckContext.Provider>
  );
};

export const useCheckContext = (): CheckContextType => {
  const context = useContext(CheckContext);
  if (!context) throw new Error("useCheck must be used within CheckProvider");
  return context;
};
