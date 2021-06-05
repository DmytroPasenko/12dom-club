import classNames from "classnames";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import {
  achieved,
  achieved_left_img,
  achieved_right_content,
  achieved_text,
  block_title,
  choose_count,
  choose_text,
  eco,
  eco_content,
  eco_icon_box,
  eco_title,
  expo,
  expo_thum,
  about,
  about_bg,
  about_image_left,
  about_image_right,
  about_text,
  why_choose_image,
  why_choose_image_top,
  why_choose_list,
  why_choose,
  why_choose_left_content,
} from "../styles/pages/about.module.scss";
import leafPng from "../../static/img/leaf.png";
import focusSvg from "../../static/svg/focus.svg";

const AboutPage = () => {
  const { t } = useTranslation(["about", "site"]);

  return (
    <Layout title={t("site:about")} description={t("site:description")}>
      <section className={about}>
        <div className={about_bg}></div>
        <div className="container">
          <div className={classNames(block_title, "text-center")}>
            <p>{t("about:welcome")}</p>
            <h3>{t("about:a1")}</h3>
            <div className="leaf">
              <img src={leafPng} alt="" width="55" height="22" />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className={classNames(about_text, "text-center")}>
                <p>{t("about:a2")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className={classNames(about_text, "text-center")}>
                <p>{t("about:a11")}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className={about_image_left}>
                <img
                  src="/img/about/diplom.jpg"
                  alt=""
                  loading="lazy"
                  width="455"
                  height="594"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className={about_image_right}>
                <img
                  src="/img/about/choice2018.png"
                  alt=""
                  loading="lazy"
                  width="455"
                  height="594"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={eco}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className={eco_content}>
                <div className={eco_icon_box}>
                  <img src={focusSvg} alt="" width="60" height="60" />
                </div>
                <div className={eco_title}>
                  <h2>{t("about:a3")}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={achieved}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div className={achieved_left_img}>
                <img
                  src="/img/about/achieved.png"
                  alt=""
                  loading="lazy"
                  width="570"
                  height="765"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className={achieved_right_content}>
                <div className={block_title}>
                  <h3>{t("about:a4")}</h3>
                  <div className="leaf">
                    <img src={leafPng} alt="" width="55" height="22" />
                  </div>
                </div>
                <div className={achieved_text}>
                  <p>{t("about:a5")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={expo}>
        <div className="container">
          <div className={classNames(block_title, "text-center")}>
            <h3>{t("about:a12")}</h3>
            <div className="leaf">
              <img src={leafPng} alt="" width="55" height="22" />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className={expo_thum}>
                <img
                  src="/img/about/expo1.png"
                  alt=""
                  loading="lazy"
                  width="570"
                  height="428"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className={expo_thum}>
                <img
                  src="/img/about/expo2.png"
                  alt=""
                  loading="lazy"
                  width="570"
                  height="428"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={why_choose}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className={why_choose_left_content}>
                <div className={classNames(block_title, "text-left")}>
                  <p>{t("about:a6")}</p>
                  <h3>{t("about:a7")}</h3>
                  <div className="leaf">
                    <img src={leafPng} alt="" width="55" height="22" />
                  </div>
                </div>
                <ul className={classNames(why_choose_list, "list-unstyled")}>
                  <li>
                    <div className={choose_count}>
                      <h2>01</h2>
                    </div>
                    <div className={choose_text}>
                      <p>{t("about:a8")}</p>
                    </div>
                  </li>
                  <li>
                    <div className={choose_count}>
                      <h2>02</h2>
                    </div>
                    <div className={choose_text}>
                      <p>{t("about:a9")}</p>
                    </div>
                  </li>
                  <li>
                    <div className={choose_count}>
                      <h2>03</h2>
                    </div>
                    <div className={choose_text}>
                      <p>{t("about:a10")}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className={why_choose_image_top}>
                <div className={why_choose_image}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
