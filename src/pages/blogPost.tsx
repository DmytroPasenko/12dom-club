import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import BlogPost from "../components/BlogPost/BlogPost";

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation(["about", "site"]);

  return (
    <Layout title={t("site:about")} description={t("site:description")}>
      <BlogPost />
    </Layout>
  );
};

export default AboutPage;
