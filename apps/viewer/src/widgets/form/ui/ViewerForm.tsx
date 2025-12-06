import { SubmitButton } from "@/features/submitViewerForm";
import { inputFieldData } from "@/shared/ui";
import { Controller, useFormContext } from "react-hook-form";
import { CorpCodeInput } from "./common/CorpCodeInput";
import { BsnsYearInput } from "./common/BsnsYearInput";

export function ViewerForm() {
  return (
    <form className="flex flex-col gap-3">
      <CorpCodeInput />
      <BsnsYearInput />
      <SubmitButton />
    </form>
  );
}
