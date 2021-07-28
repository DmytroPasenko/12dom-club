import { Context, createContext } from "react";
import {
  CmsPageProperty,
  CmsTableProperty,
  CmsTableRecord,
} from "../../types/common";

interface IndexPageContextInterface {
  page?: CmsPageProperty[];
  posts?: CmsTableRecord[];
  consultations?: CmsTableRecord[];
}

const IndexPageContext: Context<IndexPageContextInterface> = createContext({});

export default IndexPageContext;
export const { Provider } = IndexPageContext;
export const { Consumer } = IndexPageContext;
