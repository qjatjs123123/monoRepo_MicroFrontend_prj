"use client";
import { useOverlay } from "@/shared/model/useOverlay";
import { Button } from "@/shared/ui/Button/Button";
import PlusIcon from "@/shared/ui/Icon/PlusIcon";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Text } from "@/shared/ui/Text/Text";

export function CreateButton() {
  const { open, close, isOpen } = useOverlay();
  return (
    <Button
      type="primary"
      style="fill"
      className="gap-2"
      onClick={() => open(CreateInterestCompanyOverlay)}
    >
      <PlusIcon />
      <Text>관심기업 생성</Text>
    </Button>
  );
}

function CreateInterestCompanyOverlay() {
  return (
    <Modal>
      <div>
        <h2 className="text-lg font-semibold">관심기업 생성</h2>
        <p>여기에 입력 폼 넣으면 됨</p>
      </div>
    </Modal>
  );
}
