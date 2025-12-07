import { Button } from "@monorepo/ui";
import { useGetViewerUrl } from "../model/useGetViewerUrl";
import { useFormContext } from "react-hook-form";

export function SubmitButton() {
  const { refetch } = useGetViewerUrl();
  const { formState } = useFormContext();

  const isValid = formState.isValid;  

  return (
    <Button
      style="fill"
      disabled={!isValid}                   
      onClick={() => {
        if (!isValid) return;
        refetch();
      }}
    >
      검색
    </Button>
  );
}
