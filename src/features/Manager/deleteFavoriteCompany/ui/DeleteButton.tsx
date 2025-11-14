"use client";
import { useOverlay } from "@/shared/model/useOverlay";
import { Button } from "@/shared/ui/Button/Button";
import { TrashIcon } from "@/shared/ui/Icon/TrashIcon";
import { Text } from "@/shared/ui/Text/Text";
import { useCheckContext } from "../../checkFavoriteCompany";
import { DeleteModalEntry } from "./DeleteModalEntry";

export function DeleteButton() {
  const { open } = useOverlay();
  const { checkedIds } = useCheckContext();

  return (
    <Button
      type="primary"
      style="outline"
      className="gap-2"
      onClick={() => open(() => <DeleteModalEntry checkedIds={checkedIds}/>)}
    >
      <TrashIcon color="var(--color-label-800)" />
      <Text>관심기업 삭제</Text>
    </Button>
  );
}
