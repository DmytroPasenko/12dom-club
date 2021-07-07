import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { PageProps } from "gatsby";
import Layout from "../components/Layout/Layout";
import { PropertyType } from "../types/common";

interface DataRecord {
  Property: string;
  Type: PropertyType;
  Value: string;
}

interface IndexPageProps extends PageProps {
  data: {
    cmsApi: {
      page: DataRecord[];
    };
  };
}

const IndexPage: FunctionComponent<IndexPageProps> = ({ data }) => {
  const { t } = useTranslation(["site"]);
  // const { locale } = useLocalization();

  return (
    <Layout title={t("site:title")} description={t("site:description")}>
      <div>{t("site:title")} - under construction.</div>
    </Layout>
  );
};

export default IndexPage;
