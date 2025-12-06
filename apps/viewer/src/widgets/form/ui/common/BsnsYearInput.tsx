import { DropDown } from "@/features/searchCorpCodeDropDown";
import { InputDropDownWrapper } from "@/shared/ui";
import { Controller, useFormContext } from "react-hook-form";
import { CorpCodeDropDown } from "./CorpCodeDropDown";
import { BsnsYearDropDown } from "./BsnsYearDropDown";

export function BsnsYearInput() {
  const methods = useFormContext();

  return (
    <Controller
      key={"bsns_year"}
      name={"bsns_year"}
      control={methods.control}
      render={() => (
        <InputDropDownWrapper title={"사업연도"}>
          <BsnsYearDropDown />
        </InputDropDownWrapper>
      )}
    />
  );
}
