import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import AboutMePage from "../components/AboutMePage/AboutMePage";

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation(["about", "site"]);

  return (
    <Layout title={t("site:about")} description={t("site:description")}>
      <AboutMePage />
    </Layout>
  );
};

export default AboutPage;
