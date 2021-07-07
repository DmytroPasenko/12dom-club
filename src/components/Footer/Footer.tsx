import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const Footer: FunctionComponent = () => {
  const { t } = useTranslation(["site", "footer"]);

  return <div>Footer</div>;
};

export default Footer;
