import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { contacts } from "./Contacts.module.scss";

const Contacts: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="uppercase">{t("site:contacts")}</h3>
      <div className={contacts}>
        <p>{t("site:adress")}:</p>
        <p>{t("site:phones")}:</p>
        <p>E-mail:</p>
        <p>{t("site:weAreOpen")}:</p>
      </div>
    </>
  );
};

export default Contacts;
