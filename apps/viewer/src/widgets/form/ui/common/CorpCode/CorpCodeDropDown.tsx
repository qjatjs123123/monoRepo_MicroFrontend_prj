import { DropDown } from "@/features/searchCorpCodeDropDown";
import { InputIcon } from "@/shared/ui";
import { Input, SearchDropDown } from "@monorepo/ui";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { type ControllerRenderProps } from "react-hook-form";

interface CorpCodeDropDownProps {
  field: ControllerRenderProps<any, "corp_code">;
}

export function CorpCodeDropDown({ field }: CorpCodeDropDownProps) {
  return (
    <SearchDropDown>
      <SearchDropDown.Input>
        {({ setShowList, isExist }) => (
          <>
            <Input
              {...field}
              placeholder="기업명을 입력해주세요"
              onChange={(e) => {
                field.onChange(e.target.value);
                setShowList(true);
              }}
              onBlur={() => {
                setShowList(false);
              }}
            />
            <InputIcon isDown={isExist} />
          </>
        )}
      </SearchDropDown.Input>
      <SearchDropDown.Dropdown>
        {({ setShowList, isExist, setIsExist }) => (
          <ErrorBoundary fallback>
            <Suspense>
              <DropDown
                value={field.value}
                onChange={field.onChange}
                setShowList={setShowList}
                isExist={isExist}
                setIsExist={setIsExist}
              />
            </Suspense>
          </ErrorBoundary>
        )}
      </SearchDropDown.Dropdown>
    </SearchDropDown>
  );
}
