import { useTranslation } from "react-i18next";
import ContactsPage from "../components/ContactsPage/ContactsPage";
import Layout from "../components/Layout/Layout";

const Contacts = (): JSX.Element => {
  const { t } = useTranslation(["contacts", "site"]);

  return (
    <Layout title={t("site:about")} description={t("site:description")}>
      <ContactsPage />
    </Layout>
  );
};

export default Contacts;
