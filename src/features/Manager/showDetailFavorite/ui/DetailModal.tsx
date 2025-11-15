import { Button } from "@/shared/ui/Button/Button";
import { EditIcon } from "@/shared/ui/Icon/EditIcon";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Text } from "@/shared/ui/Text/Text";

export function DetailModal() {
  return (
    <Modal align="right">
      <div className="w-full md:w-1/2 h-screen bg-white flex flex-col">
        <div className="flex justify-center py-3">
          <Text weight="bold">삼성전자</Text>
        </div>

        <div className="bt border-t border-[var(--color-line-400)] p-2 flex-1">
          <div className="p-2 border border-[var(--color-line-400)] h-full">
            213123123123
          </div>
        </div>

        <div className="flex justify-end p-2">
          <Button style="fill" className="flex gap-2">
            <EditIcon />
            <Text>수정하기</Text>
          </Button>
        </div>
      </div>
    </Modal>
  );
}
