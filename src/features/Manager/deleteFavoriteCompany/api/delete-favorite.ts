import api from "@/shared/config/axios/axiosConfig";
import { AxiosSuccess } from "@/shared/model/AxiosSuccess";
import { mapAxiosSuccessMsg } from '../../../../shared/lib/mapAxiosSuccessMsg';

interface DeleteFavoriteProps {
  favorite_id: number;
  email: string;
}

export async function deleteFavorite({
  favorite_id,
  email,
}: DeleteFavoriteProps) {
  try {
    const response = await api.delete<AxiosSuccess>(
      `/favorites/${favorite_id}`,
      {
        params: { email },
      }
    );

    return mapAxiosSuccessMsg(response.data);
  } catch (error: unknown) {
    console.error("관심기업 삭제 실패:", error);
    throw error;
  }
}
