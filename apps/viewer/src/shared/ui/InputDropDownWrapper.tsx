import { StarIcon } from "@monorepo/ui";
import { Text } from "@monorepo/ui";

interface FormInputProps {
  title: string;
  children: React.ReactNode;
}

export function InputDropDownWrapper({ title, children }: FormInputProps) {
  return (
    <div className="flex gap-5 items-center">
      <div className="w-[100px] flex gap-3 items-center">
        <StarIcon />
        <Text size="3" type="body" weight="bold">
          {title}
        </Text>
      </div>
      {children}
    </div>
  );
}
