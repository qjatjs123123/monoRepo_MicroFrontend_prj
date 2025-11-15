"use client";
import { useOverlay } from "@/shared/model/useOverlay";
import { Button } from "@/shared/ui/Button/Button";
import PlusIcon from "@/shared/ui/Icon/PlusIcon";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Text } from "@/shared/ui/Text/Text";
import { CreateModal } from "./common/CreateModal";

export function CreateButton() {
  const { open } = useOverlay();
  return (
    <Button
      type="primary"
      style="fill"
      className="gap-2"
      onClick={() => open(() => <CreateModal />)}
    >
      <PlusIcon />
      <Text>관심기업 생성</Text>
    </Button>
  );
}
