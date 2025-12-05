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
  const filtered = getCompanySuggestions(value, data.companies);

  useEffect(() => {
    setIsExist(filtered.length > 0);
  }, [filtered.length, setIsExist]);

  return (
    <>
      {isExist && (
        <ul className="space-y-1 p-2">
          {filtered.map((company, index) => (
            <li
              key={index}
              onClick={() => {
                onChange(company);
                setShowList(false);
              }}
              className="
                  px-3 py-2 cursor-pointer
                  hover:bg-[var(--input-color-hover)]
                  active:bg-[var(--input-color)]
                  rounded-md
                "
            >
              {company}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
