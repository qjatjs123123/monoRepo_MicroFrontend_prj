import { Spinner } from "@/shared/ui";
import { Text } from "@monorepo/ui";

export function Loading() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Spinner />
      <Text type="caption">
        기업명과 보고서 옵션을 선택하여 제무제표를 조회해보세요.
      </Text>
    </div>
  );
}
