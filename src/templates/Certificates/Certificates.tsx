import classNames from "classnames";
import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import PreviewImageDialog, {
  PreviewImage,
} from "../../components/PreviewImageDialog/PreviewImageDialog";
import {
  block_title,
  section,
  section_image,
  section_text,
} from "./Certificates.module.scss";
import leafPng from "../../../static/img/leaf.png";

const Certificates: FunctionComponent = () => {
  const { t } = useTranslation(["certificate"]);

  const [previewImage, setPreviewImage] = useState<PreviewImage | null>(null);

  const handlePreviewDialogCallback = () => {
    setPreviewImage(null);
  };

  const handleImageClick = (src: string, caption?: string) => {
    if (src && window.innerWidth >= 480) {
      setPreviewImage({
        src,
        caption,
      });
    }
  };

  const certificates = [
    { src: "fssc5_ua.jpg", srcBig: "fssc5_ua-big.jpg" },
    { src: "fssc5_en.jpg", srcBig: "fssc5_en-big.jpg" },
    { src: "iso14001_2015_ua.jpg", srcBig: "iso14001_2015_ua-big.jpg" },
    { src: "iso14001_2015_en.jpg", srcBig: "iso14001_2015_en-big.jpg" },
    { src: "certificate2020_en.png", srcBig: "certificate2020_en-big.png" },
    { src: "iso22000_2007_ua.jpg", srcBig: "iso22000_2007_ua-big.jpg" },
    { src: "sedex2020_en.jpg", srcBig: "sedex2020_en-big.jpg" },
  ];

  return (
    <section className={section}>
      <div className="container">
        <div className={classNames(block_title, "text-center")}>
          <h3>{t("certificate:certificates")}</h3>
          <div className="leaf">
            <img src={leafPng} alt="" width="55" height="22" />
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className={classNames(section_text, "text-center")}>
              <p>{t("certificate:c1")}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {certificates.map((item) => (
            <div className="col-xl-6 col-lg-6 col-md-6" key={item.src}>
              <div className={section_image}>
                <img
                  src={`/img/certificates/${item.src}`}
                  alt=""
                  loading="lazy"
                  width="420"
                  height="594"
                  onClick={() =>
                    handleImageClick(`/img/certificates/${item.srcBig}`)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewImage && (
        <PreviewImageDialog
          previewImage={previewImage}
          callback={handlePreviewDialogCallback}
        />
      )}
    </section>
  );
};

export default Certificates;
