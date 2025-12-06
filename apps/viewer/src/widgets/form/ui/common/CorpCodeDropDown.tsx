import { DropDown } from "@/features/searchCorpCodeDropDown";
import { InputIcon } from "@/shared/ui";
import { Input, SearchDropDown } from "@monorepo/ui";
import { useFormContext, Controller } from "react-hook-form";

export function CorpCodeDropDown() {
  const { control } = useFormContext();

  return (
    <Controller
      name={"corp_code"}
      control={control}
      render={({ field }) => (
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
                />
                <InputIcon isDown={isExist} />
              </>
            )}
          </SearchDropDown.Input>
          <SearchDropDown.Dropdown>
            {({ setShowList, isExist, setIsExist }) => (
              <DropDown
                value={field.value}
                onChange={field.onChange}
                setShowList={setShowList}
                isExist={isExist}
                setIsExist={setIsExist}
              />
            )}
          </SearchDropDown.Dropdown>
        </SearchDropDown>
      )}
    />
  );
}
