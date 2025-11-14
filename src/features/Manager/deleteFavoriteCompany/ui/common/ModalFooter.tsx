import { Button } from "@/shared/ui/Button/Button";
import { useDeleteFavoriteCompany } from "../../model/useDeleteFavoriteCompany";

export function ModalFooter() {
  const mutation = useDeleteFavoriteCompany();
  return (
    <div className="flex flex-col w-full gap-2 mt-[10px]">
      <Button
        style="fill"
        className="justify-center"
        onClick={() => mutation.mutate()}
      >
        삭제
      </Button>
      <Button style="outline" className="justify-center">
        취소
      </Button>
    </div>
  );
}
