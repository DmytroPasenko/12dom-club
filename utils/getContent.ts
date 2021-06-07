// import { API_ENDPOINT, API_SITE_ID } from "../app-config";
// import {
//   ApiDataResponse,
//   ApiRequestBody,
//   ContentType,
//   PropertyType,
// } from "../src/types/common";

// export const getContent = async <T>(
//   path: string,
//   params: Record<string, unknown>,
// ): Promise<T> => {
//   const body: ApiRequestBody = {
//     locale: "en-GB",
//     path: "cms/page",
//     params: {
//       SiteID: API_SITE_ID,
//       Locale: locale,
//     },
//   };

//   fetch(API_ENDPOINT, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "omit",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   })
//     .then((response) => response.json())
//     .then((response: ApiDataResponse<DataRecord>) => {
//       if (response.success) {
//         console.log("data", response.data);
//       } else {
//         console.error("Error", response.error);
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };
