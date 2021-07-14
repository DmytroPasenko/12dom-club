import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { aboutMeHeader } from "./AboutMeHeader.module.scss";

const AboutMeHeader: FunctionComponent = () => {
  const { t } = useTranslation(["site", "about-me-header"]);

  return (
    <>
      <div className={aboutMeHeader} />
    </>
  );
};

export default AboutMeHeader;
