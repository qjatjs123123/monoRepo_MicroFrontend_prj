import { Text } from "@monorepo/ui";

export function ViewerTitle() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-end pt-[40px] pb-[20px] gap-6">
      <div className="flex flex-col">
        <Text type="title" weight="bold" size="2">
          기업 재무제표 조회
        </Text>
        <Text
          type="body"
          className="text-[var(--color-label-700)]"
          weight="medium"
          size="3"
        >
          기업명과 보고서 옵션을 선택하여 제무제표를 조회해보세요.
        </Text>
      </div>
    </div>
  );
}
