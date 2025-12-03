import { AnnoyIcon, Text } from "@monorepo/ui";

export function Error() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <AnnoyIcon />
      <div className="flex flex-col">
        <Text type="caption">
          제무제표를 조회 중 오류가 발생했습니다.
        </Text>
        <Text type="caption">
          옵션을 확인 후 다시 시도해주세요.
        </Text>
      </div>
    </div>
  );
}
