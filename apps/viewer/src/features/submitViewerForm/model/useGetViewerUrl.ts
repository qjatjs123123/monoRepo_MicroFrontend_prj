import { useQuery } from "@tanstack/react-query";
import { getViewerUrl } from "../api/get-viewerUrl";
import type { ViewerFormProps } from "./type";
import { useFormContext } from "react-hook-form";
import { mapFormValues } from "../lib/mapFormValues";
import { useQueryEffects } from "@monorepo/core";

export function useGetViewerUrl() {
  const { getValues } = useFormContext<ViewerFormProps>();

  const query = useQuery({
    queryKey: ["url"],
    queryFn: () => {
    const currentFormData = getValues(); 
    return getViewerUrl(mapFormValues(currentFormData));
  },
    enabled: false, // 수동 호출
    retry: 0,
    gcTime: 0,
  });

  useQueryEffects(query, {
    onSuccess: (data) => {
      console.log("쿼리 성공:", data);
    },
    onError: (error: any) => {
      console.error("쿼리 실패:", error.message);
    },
    onSettled: (data, error) => {
      console.log("쿼리 완료:", { data, error });
    },
  });

  return query;
}
