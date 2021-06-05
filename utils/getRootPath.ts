import { DEF_LOCALE } from "../app-config";

export const getRootPath = (locale: string): string => {
  return locale === DEF_LOCALE ? "/" : `/${locale}`;
};
