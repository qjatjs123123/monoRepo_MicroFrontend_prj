import { useMutation } from "@tanstack/react-query";
import { postViewerUrl } from "../api/post-viewerUrl";
import type { ViewerFormProps } from "./type";
import { useFormContext } from "react-hook-form";
import { mapFormValues } from "../lib/mapFormValues";

export function useGetViewerUrl() {
  const { getValues } = useFormContext<ViewerFormProps>();

  return useMutation({
    mutationFn: async () => {
      const formData = getValues();
      return postViewerUrl(mapFormValues(formData));
    },
    retry: 0,

    onSuccess: (data) => {
      console.log("Viewer URL fetch success:", data);
    },

    onError: (error) => {
      console.error("Viewer URL fetch error:", error);
    },
  });
}
