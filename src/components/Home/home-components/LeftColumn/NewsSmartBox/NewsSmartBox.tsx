import { FunctionComponent, useContext } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { formatDate } from "@miran-soft/common";
import { useLocalization } from "gatsby-theme-i18n";
import {
  newsBoxContainer,
  mainNews,
  newsImg,
  softNews,
  softNewsImg,
  newsTextContent,
  aDate,
  leftBox,
  rightBox,
} from "./NewsSmartBox.module.scss";
import { isEven } from "../../../../../utils/isEven";

interface MainNewsRecord {
  title: string;
  date: number;
  author: string;
  comments: string;
  image: string;
}

interface SoftNewsRecord {
  class: string;
  image: string;
  title: string;
  date: number;
  author: string;
}

const NewsSmartBox: FunctionComponent = () => {
  const { t } = useTranslation(["site", "news-smart-box"]);
  const { locale } = useLocalization();
  const { posts } = useContext(IndexPageContext);

  return <></>;
};

export default NewsSmartBox;
