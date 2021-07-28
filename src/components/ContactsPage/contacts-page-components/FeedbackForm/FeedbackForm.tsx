import { FunctionComponent, BaseSyntheticEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { formContainer, inputBox } from "./Feedback.module.scss";
import manIcon from "../../../../../static/svg/feedback-form/man-icon.svg";
import emailIcon from "../../../../../static/svg/feedback-form/email-icon.svg";
import phoneIcon from "../../../../../static/svg/feedback-form/phone-icon.svg";
import penIcon from "../../../../../static/svg/feedback-form/pen-icon.svg";

interface FeedbackFormResponse {
  success: boolean;
}

interface FeedbackFormValues {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLTextAreaElement;
}

type SubmitStatusType = "submitting" | "success" | "error" | "none";

const FeedbackForm: FunctionComponent = () => {
  const { t } = useTranslation("site");

  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>("none");

  const handleSendMore = () => {
    const form = document.getElementById("feedback-form") as HTMLFormElement;
    form?.reset();
    setSubmitStatus("none");
  };

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    if (!process.env.CONTACT_API_URL) {
      setSubmitStatus("error");
      return;
    }

    const {
      name,
      phone: contactPhone,
      email: contactEmail,
      message,
    } = event.target as FeedbackFormValues;

    setSubmitStatus("submitting");

    fetch(process.env.CONTACT_API_URL, {
      method: "POST",
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "omit", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      // redirect: "follow", // manual, *folslow, error
      // referrer: "client", // no-referrer, *client
      body: JSON.stringify({
        name: name?.value ?? "",
        phone: contactPhone?.value ?? "",
        email: contactEmail?.value ?? "",
        message: message?.value ?? "",
      }),
    })
      .then((response) => response.json())
      .then((response: FeedbackFormResponse) => {
        if (response.success) {
          setSubmitStatus("success");
        } else {
          // eslint-disable-next-line no-console
          console.error("Send email error");
          setSubmitStatus("error");
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error:", error);
        setSubmitStatus("error");
      });
  };

  return (
    <>
      <h3 className="uppercase">{t("site:contactUs")}</h3>
      <form
        id="feedback-form"
        onSubmit={handleSubmit}
        className={formContainer}
      >
        <div className={inputBox}>
          <img src={manIcon} alt="man" />
          <input
            type="text"
            id="name"
            placeholder={t("site:yourName")}
            required
          />
        </div>
        <div className={inputBox}>
          <img src={emailIcon} alt="e-mail" />
          <input
            type="email"
            id="email"
            placeholder={t("site:yourEmail")}
            required
          />
        </div>
        <div className={inputBox}>
          <img src={phoneIcon} alt="phone" />
          <input
            type="phone"
            id="phone"
            placeholder={t("site:yourPhone")}
            required
          />
        </div>
        <div className={inputBox}>
          <span>
            <img src={penIcon} alt="pen" />
            <textarea
              id="message"
              name="message"
              placeholder={t("site:yourMessage")}
              required
            />
          </span>
        </div>

        {submitStatus === "error" && (
          <div className="py-4">
            <div
              className="bg-red-200 border border-red-500 text-red-900 px-4 py-3 mb-6 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">
                {t("site:contactUsError")}
              </span>
            </div>
          </div>
        )}
        {submitStatus !== "success" && (
          <button
            type="submit"
            className="uppercase"
            disabled={submitStatus === "submitting"}
          >
            {submitStatus === "submitting" ? t("site:sending") : t("site:send")}
          </button>
        )}
        {submitStatus === "success" && (
          <div className="py-4">
            <div
              className="bg-green-200 border border-green-600 text-green-900 px-4 py-3 mb-6 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">
                {t("site:contactUsSuccess")}
              </span>
            </div>
            <button
              className="uppercase"
              onClick={handleSendMore}
              type="submit"
            >
              {t("site:sendMore")}
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default FeedbackForm;
