import { Context, createContext } from "react";
import { CmsPageProperty, CmsTableRecord } from "../../types/common";

interface IndexPageContextInterface {
  page?: CmsPageProperty[];
  news?: CmsTableRecord[];
}

const IndexPageContext: Context<IndexPageContextInterface> = createContext({});

export default IndexPageContext;
export const { Provider } = IndexPageContext;
export const { Consumer } = IndexPageContext;
