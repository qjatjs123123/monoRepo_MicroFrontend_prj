import type { ViewerFormProps } from "@/features/submitViewerForm";
import { FormInput, inputFieldData } from "@/shared/ui";
import { Controller, FormProvider, useForm } from "react-hook-form";

export function ViewerForm() {
  const methods = useForm<ViewerFormProps>({
    defaultValues: {
      corp_code: "00126380",
      bsns_year: "2024",
      reprt_code: "11013",
      fs_div: "CFS",
    },
  });

  return (
    <div className="flex flex-col gap-3">
      <FormProvider {...methods}>
        <form className="flex flex-col gap-3">
          {inputFieldData.map((f) => (
            <Controller
              key={f.name}
              name={f.name}
              control={methods.control}
              render={({ field }) => (
                <FormInput
                  field={field}
                  title={f.label}
                  placeholder={f.placeholder}
                />
              )}
            />
          ))}
        </form>
      </FormProvider>
    </div>
  );
}
