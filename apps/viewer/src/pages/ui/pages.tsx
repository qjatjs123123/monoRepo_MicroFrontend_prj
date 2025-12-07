import { Layout } from "@monorepo/ui";
import { ViewerTitle } from "@/widgets/title";
import { ViewerForm } from "@/widgets/form";
import { FormProvider, useForm } from "react-hook-form";
import type { ViewerFormProps } from "@/features/submitViewerForm";
import { Viewer } from "@/widgets/viewer";

export function Page() {
  const methods = useForm<ViewerFormProps>({
     mode: "onChange",
    defaultValues: {
      corp_code: "",
      bsns_year: "",
      reprt_code: "",
      fs_div: "",
    },
  });
  return (
    <Layout>
      <ViewerTitle />
      <FormProvider {...methods}>
        <ViewerForm />
        <Viewer />
      </FormProvider>
    </Layout>
  );
}

