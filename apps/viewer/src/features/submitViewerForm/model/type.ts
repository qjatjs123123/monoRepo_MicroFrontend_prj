export type ReprtCodeType = "11011" | "11012" | "11013" | "11014";
export type FsDiv = "CFS" | "OFS";

export interface ViewerFormProps {
  corp_code: string; // 8자리
  bsns_year: string; // 4자리
  reprt_code: ReprtCodeType;
  fs_div: FsDiv;
}
