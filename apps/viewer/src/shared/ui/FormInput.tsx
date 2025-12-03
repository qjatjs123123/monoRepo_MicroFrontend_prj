import { StarIcon } from "@monorepo/ui";
import { Text, Input } from "@monorepo/ui";

interface FormInputProps {
  field: any;
  title: string;
  placeholder: string;
}

export function FormInput({ field, title, placeholder }: FormInputProps) {
  return (
    <div className="flex gap-5 items-center">
      <div className="w-[80px] flex gap-3 items-center">
        <StarIcon />
        <Text size="3" type="body" weight="bold">
          {title}
        </Text>
      </div>
      <div className="flex-1">
        <Input
          {...field}
          placeholder={placeholder}
          onChange={(e) => field.onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
