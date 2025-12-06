import { getYearArr } from "../lib/getter";

interface DropDownProps {
  onChange: (val: string) => void;
  setShowList: (show: boolean) => void;
}

export function DropDown({ onChange, setShowList }: DropDownProps) {
  const years = getYearArr();
  return (
    <ul className="space-y-1 p-2 z-10">
      {years.map((year) => (
        <li
          key={year}
          onMouseDown={() => {
            onChange(String(year));
            setShowList(false);
          }}
          className="
                px-3 py-2 cursor-pointer
                hover:bg-[var(--input-color-hover)]
                active:bg-[var(--input-color)]
                rounded-md
              "
        >
          {year}
        </li>
      ))}
    </ul>
  );
}
