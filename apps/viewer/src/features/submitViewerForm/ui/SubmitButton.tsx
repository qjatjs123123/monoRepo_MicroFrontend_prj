import { Button } from "@monorepo/ui";
import { useGetViewerUrl } from "../model/useGetViewerUrl";
import { useQueryClient } from "@tanstack/react-query";

export function SubmitButton() {
  const { refetch } = useGetViewerUrl();
  const queryClient = useQueryClient();

  return (
    <Button
      style="fill"
      onClick={() => {
        queryClient.setQueryData(["url"], undefined);
        refetch();
      }}
    >
      검색
    </Button>
  );
}
