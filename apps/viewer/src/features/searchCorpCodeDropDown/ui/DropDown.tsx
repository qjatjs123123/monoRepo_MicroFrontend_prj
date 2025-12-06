import { useGetCompanies } from "@/entities";
import { useEffect } from "react";
import { getCompanySuggestions } from "../lib/filter";

interface CompanySuggestProps {
  value: string;
  onChange: (value: string) => void;
  setShowList: (value: boolean) => void;
  setIsExist: (value: boolean) => void;
  isExist: boolean;
}

export function DropDown({
  value,
  onChange,
  setShowList,
  setIsExist,
  isExist,
}: CompanySuggestProps) {
  const { data } = useGetCompanies();
  const filtered = getCompanySuggestions(value, data!.companies);

  useEffect(() => {
    setIsExist(filtered.length > 0);
  }, [filtered.length, setShowList]);

  return (
    <>
      {isExist && (
        <ul className="space-y-1 p-2">
          {filtered.map(({ name, code }) => (
            <li
              key={code}
              onClick={() => {
                onChange(name);
                setShowList(false);
              }}
              className="
                  px-3 py-2 cursor-pointer
                  hover:bg-[var(--input-color-hover)]
                  active:bg-[var(--input-color)]
                  rounded-md
                "
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
