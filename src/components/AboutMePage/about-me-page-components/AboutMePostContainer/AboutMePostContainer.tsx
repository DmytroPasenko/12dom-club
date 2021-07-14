import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { temp } from "./AboutMePostContainer.module.scss";

const AboutMePostContainer: FunctionComponent = () => {
  const { t } = useTranslation(["site", "about-me-post-container"]);

  return (
    <>
      <div>AboutMeHeader</div>
    </>
  );
};

export default AboutMePostContainer;
