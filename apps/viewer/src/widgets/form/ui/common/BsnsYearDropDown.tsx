import { DropDown } from "@/features/searchBsnsYearDropDown";
import { InputIcon } from "@/shared/ui";
import { Input, SearchDropDown } from "@monorepo/ui";
import { useFormContext, Controller } from "react-hook-form";

export function BsnsYearDropDown() {
  const { control } = useFormContext();

  return (
    <Controller
      name={"bsns_year"}
      control={control}
      render={({ field }) => (
        <SearchDropDown>
          <SearchDropDown.Input>
            {({ setShowList, showList, setIsExist }) => (
              <>
                <Input
                  {...field}
                  readonly
                  placeholder="사업연도를 입력해주세요"
                  onFocus={() => {
                    setShowList(true);
                    setIsExist(true);
                  }}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(document.activeElement)) {
                      setShowList(false);
                    }
                  }}
                />
                <InputIcon isDown={showList} />
              </>
            )}
          </SearchDropDown.Input>
          <SearchDropDown.Dropdown>
            {({ setShowList }) => (
              <DropDown onChange={field.onChange} setShowList={setShowList} />
            )}
          </SearchDropDown.Dropdown>
        </SearchDropDown>
      )}
    />
  );
}
