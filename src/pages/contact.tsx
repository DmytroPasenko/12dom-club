import { BaseSyntheticEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import {
  box,
  contact,
  contact_icon,
  contact_single,
  google_map,
  input_box,
  location_single,
} from "../styles/pages/contact.module.scss";
import phoneCallSvg from "../../static/svg/phone-call.svg";
import placeholderSvg from "../../static/svg/placeholder.svg";
import messageSvg from "../../static/svg/message.svg";

interface ContactForm {
  name: HTMLInputElement;
  phone?: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const ContactPage = () => {
  const { t } = useTranslation(["contact", "company", "site"]);

  const [submitStatus, setSubmitStatus] = useState(""); // submitting, success, error

  const handleSubmit = (event: BaseSyntheticEvent) => {
    // https://spectrum.chat/gatsby-js/general/how-to-make-a-post-request-to-an-api~7bdd2e8d-67d8-48f3-90b5-07eac5ab4bfc
    event.preventDefault();

    const { name, phone, email, message } = event.target as ContactForm;

    setSubmitStatus("submitting");

    fetch(
      "https://lv1xinybx3.execute-api.eu-central-1.amazonaws.com/prod/contact-us",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        // redirect: "follow", // manual, *folslow, error
        // referrer: "client", // no-referrer, *client
        body: JSON.stringify({
          name: name.value,
          phone: phone?.value ?? "",
          email: email.value,
          message: message.value,
        }),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitStatus("success");
        } else {
          console.error("Send email error", data);
          setSubmitStatus("error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitStatus("error");
      });
  };

  return (
    <Layout title={t("site:contacts")} description={t("site:description")}>
      <section className={box}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className={location_single}>
                <h2>{t("contact:companyCountry")}</h2>
                <p>
                  <img
                    src={placeholderSvg}
                    alt=""
                    width="18"
                    height="18"
                    className={contact_icon}
                  />
                  {t("company:address")}
                </p>
                <a href="mailto:info@agroimpex.group">
                  <img
                    src={messageSvg}
                    alt=""
                    width="18"
                    height="18"
                    className={contact_icon}
                  />
                  info@agroimpex.group
                </a>
                <br />
                <a href="tel:+380552390162">
                  <img
                    src={phoneCallSvg}
                    alt=""
                    width="18"
                    height="18"
                    className={contact_icon}
                  />
                  +38 055 239 0162
                </a>
                <br />
                <a href="tel:+380504940410">
                  <img
                    src={phoneCallSvg}
                    alt=""
                    width="18"
                    height="18"
                    className={contact_icon}
                  />
                  +38 050 494 0410
                </a>
                <br />
                <a href="tel:+380675589405">
                  <img
                    src={phoneCallSvg}
                    alt=""
                    width="18"
                    height="18"
                    className={contact_icon}
                  />
                  +38 067 558 9405
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={contact} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <hr />
              <div className={contact_single}>
                <h2>{t("contact:writeUsAMessage")}</h2>
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-4 col-md-6">
                      <div className={input_box}>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder={t("contact:yourName") + " *"}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className={input_box}>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder={t("contact:phoneNumber")}
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                      <div className={input_box}>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t("contact:emailAddress") + " *"}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-12">
                      <div className={input_box}>
                        <textarea
                          id="message"
                          name="message"
                          placeholder={t("contact:writeMessage") + " *"}
                          required
                        ></textarea>
                      </div>
                      {submitStatus === "error" && (
                        <div className="alert alert-danger">
                          {t("contact:contactUsError")}
                        </div>
                      )}
                      {submitStatus !== "success" && (
                        <button
                          type="submit"
                          className="appBtn"
                          disabled={submitStatus === "submitting"}
                        >
                          {submitStatus === "submitting"
                            ? t("contact:submitting")
                            : t("contact:submit")}
                        </button>
                      )}
                      {submitStatus === "success" && (
                        <div className="alert alert-success">
                          {t("contact:contactUsSuccess")}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175075.7942277462!2d32.40054845503631!3d46.71442925706902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c417226fcad07b%3A0x915d076214aa7a64!2z0JDQs9GA0L7QuNC90LLQtdGB0YIg0KXQtdGA0YHQvtC9!5e0!3m2!1sen!2sua!4v1620035656809!5m2!1sen!2sua"
          className={google_map}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </Layout>
  );
};

export default ContactPage;
