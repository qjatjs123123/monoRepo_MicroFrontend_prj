import { useQuery } from "@tanstack/react-query";
import { getViewerUrl } from "../api/get-viewerUrl";
import type { ViewerFormProps } from "./type";
import { useFormContext } from "react-hook-form";

export function useGetViewerUrl() {
  const { getValues } = useFormContext<ViewerFormProps>();

  return useQuery({
    queryKey: ["url"],
    queryFn: () => getViewerUrl(getValues()),
    enabled: false,
    retry: 0,
    gcTime: 0,
  });
}
