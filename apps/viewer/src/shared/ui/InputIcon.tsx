import { ChevronDownIcon, ChevronUpIcon } from "@monorepo/ui";

export function InputIcon({ isDown }: { isDown: boolean }) {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 right-5 ">
      {isDown ? <ChevronDownIcon /> : <ChevronUpIcon />}
    </div>
  );
}
