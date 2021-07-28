import { FunctionComponent, useContext } from "react";
import { useLocalization } from "gatsby-theme-i18n";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import {
  consultationBody,
  quoteHeader,
  consultationContent,
  consultationImage,
  leftImage,
  rightImage,
  consultationText,
  subLi,
  bulletList,
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
        const textContent = getPropertyAsStr(item, "textContent");
        const footer = getPropertyAsStr(item, "footer");

        return (
          <div className={consultationBody}>
            <div className="uppercase text-center">
              <h3>{title}</h3>
              <h6>{subTitle}</h6>
              <h5 className={classNames(quoteHeader, "text-left")}>
                {quoteTitle}
              </h5>
            </div>
            <div className={classNames(consultationContent, "flex flex-row")}>
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
                className={classNames(consultationText, {
                  "order-1": isEven(index),
                  "order-2": !isEven(index),
                })}
              >
                {textContent}
              </div>
            </div>
            <div className={consultationFooter}>{footer}</div>
          </div>
        );
      })}
    </>
  );
};

export default Slider;
