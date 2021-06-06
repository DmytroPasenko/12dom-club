// import { ImageDataLike } from "gatsby-plugin-image";

// export interface ProductListRecord {
//   slug: string;
//   title: string;
//   mainImage: ImageDataLike | undefined;
// }

// export interface ProductMainImages {
//   nodes: {
//     relativeDirectory: string;
//     childImageSharp: ImageDataLike;
//   }[];
// }

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
// export interface ApiResponse extends ApiBasicResponse {
//   [key: string]: unknown;
// }
export interface ApiDataResponse<T> extends ApiBasicResponse {
  data?: T;
}

// enum ContentTypeEnum {
//   PAGE = "PAGE",
//   TABLE = "TABLE",
// }

// export type ContentType = keyof typeof ContentTypeEnum;

enum PropertyTypeEnum {
  STRING = "STRING",
  NUMBER = "NUMBER",
  MONEY = "MONEY",
  FILE = "FILE",
  // BOOLEAN = "BOOLEAN",
  // DATE = "DATE",
}

export type PropertyType = keyof typeof PropertyTypeEnum;
