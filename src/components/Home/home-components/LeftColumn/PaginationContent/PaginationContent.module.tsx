import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { 
  
} from "./PaginationContent.module.scss"

import doubleSmartBoxBg from "../../../../../../static/img/home/left-column/double-smart-box/double-smart-box-bg.jpg"
import arrow from "../../../../../../static/svg/other/arrow.svg"

const PaginationContent: FunctionComponent = () => {
  const { t } = useTranslation(["site", "pagination-content"]);

  return (
    <>
      <div>Pagination-Content</div>
    </>
  );
};

export default PaginationContent;
