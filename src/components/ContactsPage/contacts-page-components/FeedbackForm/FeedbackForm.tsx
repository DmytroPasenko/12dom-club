import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { formContainer, inputBox } from "./Feedback.module.scss";

import manIcon from "../../../../../static/svg/feedback-form/man-icon.svg";
import emailIcon from "../../../../../static/svg/feedback-form/email-icon.svg";
import phoneIcon from "../../../../../static/svg/feedback-form/phone-icon.svg";
import penIcon from "../../../../../static/svg/feedback-form/pen-icon.svg";

const FeedbackForm: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="uppercase">{t("site:contactUs")}</h3>
      <form className={formContainer}>
        <div className={inputBox}>
          <img src={manIcon} alt="man" />
          <input type="text" placeholder={t("site:yourName")} />
        </div>
        <div className={inputBox}>
          <img src={emailIcon} alt="e-mail" />
          <input type="text" placeholder={t("site:yourEmail")} />
        </div>
        <div className={inputBox}>
          <img src={phoneIcon} alt="phone" />
          <input type="text" placeholder={t("site:yourPhone")} />
        </div>
        <div className={inputBox}>
          <span>
            <img src={penIcon} alt="pen" />
            <textarea placeholder={t("site:yourMessage")} />
          </span>
        </div>
        <button className="uppercase" type="button">
          {t("site:send")}
        </button>
      </form>
    </>
  );
};

export default FeedbackForm;
