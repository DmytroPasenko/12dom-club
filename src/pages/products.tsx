import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import ProductList from "../components/ProductList/ProductList";

const ProductsPage: FunctionComponent = () => {
  const { t } = useTranslation(["site"]);

  return (
    <Layout title={t("site:ourProducts")} description={t("site:description")}>
      <ProductList />
    </Layout>
  );
};

export default ProductsPage;
