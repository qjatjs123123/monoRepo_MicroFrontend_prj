import type { CompaniesDTO } from "../api/dto/companies-DTO";
import { COMPANY_CODE } from "../config/constants";
import type { Companies } from "../model/companies";

export function mapCompanies(dto: CompaniesDTO): Companies {
  return {
    companies: dto.companies.map((name) => {
      return { name, code: COMPANY_CODE[name] };
    }),
  };
}
