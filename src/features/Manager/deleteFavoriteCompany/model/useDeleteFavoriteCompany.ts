import { useMutation } from "@tanstack/react-query";
import { deleteFavorite } from "../api/delete-favorite";
import { useToastService } from "@/shared/ui/Toast/model/useToastService";
import { AxiosError } from "axios";
import { EMAIL } from '../../../../shared/config/constants/constants';

export function useDeleteFavoriteCompany() {
  const { show } = useToastService();

  const mutation = useMutation({
    mutationFn: async () => {
      const param = {favorite_id: 1, email: EMAIL}
      const res = await deleteFavorite(param);

      return res.message;
    },
    onSuccess: (message) => {
      show(message);
    },
    onError: (error: AxiosError) => {
      show(error.message);
    },
    retry: 0,
  });

  return mutation;
}
