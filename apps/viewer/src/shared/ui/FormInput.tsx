import { DropDown } from "@/features/searchFavoriteCompany";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  SearchDropDown,
  StarIcon,
} from "@monorepo/ui";
import { Text, Input } from "@monorepo/ui";

interface FormInputProps {
  field: any;
  title: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}

export function FormInput({
  field,
  title,
  placeholder,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="flex gap-5 items-center">
      <div className="w-[100px] flex gap-3 items-center">
        <StarIcon />
        <Text size="3" type="body" weight="bold">
          {title}
        </Text>
      </div>
      <SearchDropDown>
        <SearchDropDown.Input>
          {({ setShowList, isExist }) => (
            <>
              <Input
                {...field}
                placeholder={placeholder}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  setShowList(true);
                }}
              />
              <WrapperIcon isDown={isExist} />
            </>
          )}
        </SearchDropDown.Input>
        <SearchDropDown.Dropdown>
          {({ setShowList, isExist, setIsExist }) => (
            <DropDown
              value={value}
              onChange={onChange}
              setShowList={setShowList}
              isExist={isExist}
              setIsExist={setIsExist}
            />
          )}
        </SearchDropDown.Dropdown>
      </SearchDropDown>
    </div>
  );
}

function WrapperIcon({ isDown }: { isDown: boolean }) {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 right-5 ">
      {isDown ? <ChevronDownIcon /> : <ChevronUpIcon />}
    </div>
  );
}
