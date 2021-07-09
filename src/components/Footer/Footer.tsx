import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import {
  footer
} from "./Footer.module.scss"

const Footer: FunctionComponent = () => {
  const { t } = useTranslation(["site", "footer"]);

  return <div className={footer}>Footer</div>;
};

export default Footer;
