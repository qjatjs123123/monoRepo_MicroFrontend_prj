import { mapCompanies } from "../lib/mapCompanies";
import type { CompaniesDTO } from "./dto/companies-DTO";
import api from "@/shared/config/axios/axiosConfig";

export async function getCompanies() {
  const response = await api.get<CompaniesDTO>("http://dev-assignment-env.eba-vpitzthp.ap-northeast-2.elasticbeanstalk.com/companies");
  console.log(response);
  return mapCompanies(response.data);
}
