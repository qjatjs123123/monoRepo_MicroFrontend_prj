import { InputDropDownWrapper } from "@/shared/ui";
import { Controller, useFormContext } from "react-hook-form";
import { CorpCodeDropDown } from "./CorpCodeDropDown";

export function CorpCodeInput() {
  const methods = useFormContext();

  return (
    <Controller
      key={"corp_code"}
      name={"corp_code"}
      control={methods.control}
      render={() => (
        <InputDropDownWrapper title={"기업명"}>
          <CorpCodeDropDown />
        </InputDropDownWrapper>
      )}
    />
  );
}
