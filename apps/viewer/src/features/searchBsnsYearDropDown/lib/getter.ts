import { LIMIT } from "../config/constants";

export function getYearArr(): number[] {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: LIMIT }, (_, i) => currentYear - i);
}