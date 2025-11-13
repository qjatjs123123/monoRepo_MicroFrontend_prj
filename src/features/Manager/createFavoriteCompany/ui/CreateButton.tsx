import { Button } from "@/shared/ui/Button/Button";
import PlusIcon from "@/shared/ui/Icon/PlusIcon";
import { Text } from "@/shared/ui/Text/Text";

export function CreateButton() {
  return (
    <Button type="primary" style="fill" className="gap-2">
      <PlusIcon />
      <Text>관심기업 생성</Text>
    </Button>
  );
}
