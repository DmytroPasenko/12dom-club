import { FunctionComponent, useContext } from "react";
import { useLocalization } from "gatsby-theme-i18n";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import sanitizeHtml from "sanitize-html";
import {
  consultationBody,
  quoteHeader,
  consultationContent,
  consultationImage,
  leftImage,
  rightImage,
  consultationText,
  subLi,
  consultationFooter,
  subP,
} from "./Consultation.module.scss";
import { isEven } from "../../../../utils/isEven";
import IndexPageContext from "../../../Context/IndexContext";
import { getPropertyAsStr } from "../../../../utils/getPropertyAsStr";
import { getProperty } from "../../../../utils/getProperty";

const Slider: FunctionComponent = () => {
  const { t } = useTranslation(["site"]);
  const { locale } = useLocalization();
  const { consultations } = useContext(IndexPageContext);

  return (
    <>
      {consultations?.map((item, index) => {
        const title = getPropertyAsStr(item, "title");
        const subTitle = getPropertyAsStr(item, "subTitle");
        const quoteTitle = getPropertyAsStr(item, "quoteTitle");
        const image = getPropertyAsStr(item, "image");
        const textContent = sanitizeHtml(getPropertyAsStr(item, "textContent"));
        const footer = sanitizeHtml(getPropertyAsStr(item, "footer"));

        return (
          <div className={consultationBody}>
            <div className="uppercase text-center">
              <h3>{title}</h3>
              <h6>{subTitle}</h6>
              <blockquote>{quoteTitle}</blockquote>
            </div>
            <div
              className={classNames(
                consultationContent,
                "flex lg:flex-row flex-col",
              )}
            >
              <div
                className={classNames(consultationImage, {
                  "order-1": !isEven(index),
                  "order-2": isEven(index),
                })}
              >
                <img
                  className={`${isEven(index) ? rightImage : leftImage}`}
                  src={image}
                  alt="consultation"
                />
              </div>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: textContent }}
                className={classNames(consultationText, {
                  "order-1": isEven(index),
                  "order-2": !isEven(index),
                })}
              />
            </div>
            <div // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: footer }}
              className={consultationFooter}
            />
          </div>
        );
      })}
    </>
  );
};

export default Slider;
