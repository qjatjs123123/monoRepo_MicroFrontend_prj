import { Button } from "@/shared/ui/Button/Button";
import { TrashIcon } from "@/shared/ui/Icon/TrashIcon";
import { Text } from "@/shared/ui/Text/Text";

export function DeleteButton() {
  return (
    <Button type="primary" style="outline" className="gap-2">
      <TrashIcon color="var(--color-label-800)"/>
      <Text>관심기업 삭제</Text>
    </Button>
  );
}
