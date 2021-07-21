export interface ApiRequestBody extends Record<string, unknown> {
  locale: string;
  path: string;
  params?: Record<string, unknown>;
  defParams?: Record<string, unknown>;
}

export interface ApiRequestError {
  error?: string;
  code?: string;
  message?: string;
}
export interface ApiBasicResponse {
  success: boolean;
  error?: string | ApiRequestError;
}
export interface ApiDataResponse<T> extends ApiBasicResponse {
  data?: T;
}

enum PropertyTypeEnum {
  STRING = "STRING",
  STRING_NO_LOCALE = "STRING_NO_LOCALE",
  FILE = "FILE",
  HTML = "HTML",
  INTEGER = "INTEGER",
  NUMBER = "NUMBER",
  MONEY = "MONEY",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
}

export type PropertyType = keyof typeof PropertyTypeEnum;

export type PropertyValue = string | boolean | number | Date | undefined;

export interface CmsProperty {
  name: string;
  type: PropertyType;
  value: string;
}

export interface CmsPageProperty extends CmsProperty {
  content?: string;
  locale?: string;
}

export interface CmsTableProperty extends CmsProperty {
  locale?: string;
}

export interface CmsTableRecord {
  content?: string;
  slug?: string;
  created?: number;
  position?: number;
  properties: CmsTableProperty[];
}

export interface IndexPageGqlArgs {
  locale: string;
}

export interface IndexPageGqlResponse {
  page: CmsPageProperty[];
  posts: CmsTableRecord[];
}

// export interface AboutPageGqlResponse {
//   page: CmsPageProperty[];
//   table: CmsTableRecord[];
// }
