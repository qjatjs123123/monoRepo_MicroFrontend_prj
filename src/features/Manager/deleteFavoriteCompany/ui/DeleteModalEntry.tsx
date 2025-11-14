import { useToastService } from "@/shared/ui/Toast/model/useToastService";
import { ModalContainer } from "./common/ModalContainer";
import { useEffect } from "react";

export function DeleteModalEntry({ checkedIds }: { checkedIds: number[] }) {
  const toast = useToastService();
  const isEntry = checkedIds.length > 0;

  useEffect(() => {
    if (checkedIds.length === 0) {
      toast.show("삭제할 항목이 없습니다.");
    }
  }, [checkedIds, toast]);

  return isEntry ? <ModalContainer checkedIds={checkedIds} /> : null;
}
