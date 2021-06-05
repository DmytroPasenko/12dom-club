import { useLocalization } from "gatsby-theme-i18n";
import {
  CSSProperties,
  Fragment,
  FunctionComponent,
  SyntheticEvent,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { getRootPath } from "../../../utils/getRootPath";
import AppLink from "../AppLink";
import { overlay, content, closeBtn, menuIcon } from "./MobileMenu.module.scss";

interface MobileMenuProps {
  style?: CSSProperties;
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({ style }) => {
  const { t } = useTranslation("site");
  const { locale } = useLocalization();
  const rootPath = getRootPath(locale);
  const [open, setOpen] = useState(false);

  const handleOpen = (event: SyntheticEvent) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = (event: SyntheticEvent) => {
    event.preventDefault();
    setOpen(false);
  };

  return (
    <Fragment>
      <a
        href="#"
        className={menuIcon}
        onClick={handleOpen}
        style={style}
        aria-label={t("site:menu")}
      >
        <div></div>
        <div></div>
        <div></div>
      </a>

      <div
        className={overlay}
        style={{ height: `${open ? 100 : 0}%` }}
        onClick={handleClose}
      >
        <a href="#" className={closeBtn}>
          &times;
        </a>

        <div className={content}>
          <AppLink to={rootPath}>{t("site:home")}</AppLink>
          <AppLink to={`/products`}>{t("site:ourProducts")}</AppLink>
          <AppLink to={`/about`}>{t("site:about")}</AppLink>
          <AppLink to={`/contact`}>{t("site:contacts")}</AppLink>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
