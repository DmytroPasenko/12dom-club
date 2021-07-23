import { FunctionComponent } from "react";
import { formContainer, inputBox } from "./Feedback.module.scss";

import manIcon from "../../../../../static/svg/feedback-form/man-icon.svg";
import emailIcon from "../../../../../static/svg/feedback-form/email-icon.svg";
import phoneIcon from "../../../../../static/svg/feedback-form/phone-icon.svg";
import penIcon from "../../../../../static/svg/feedback-form/pen-icon.svg";

const FeedbackForm: FunctionComponent = () => (
  <>
    <h3 className="uppercase">Let&#39;s get in touch</h3>
    <form className={formContainer}>
      <div className={inputBox}>
        <img src={manIcon} alt="man" />
        <input type="text" placeholder="Your name" />
      </div>
      <div className={inputBox}>
        <img src={emailIcon} alt="e-mail" />
        <input type="text" placeholder="Your e-mail" />
      </div>
      <div className={inputBox}>
        <img src={phoneIcon} alt="phone" />
        <input type="text" placeholder="Your phone" />
      </div>
      <div className={inputBox}>
        <span>
          <img src={penIcon} alt="pen" />
          <textarea placeholder="Your message" />
        </span>
      </div>
      <button className="uppercase" type="button">
        Send
      </button>
    </form>
  </>
);

export default FeedbackForm;
