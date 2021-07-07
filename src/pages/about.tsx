import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation(["about", "site"]);

  return (
    <Layout title={t("site:about")} description={t("site:description")}>
      <div>about</div>
    </Layout>
  );
};

export default AboutPage;
