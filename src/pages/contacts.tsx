import { useTranslation } from "react-i18next";
import ContactsPage from "../components/ContactsPage/ContactsPage";
import Layout from "../components/Layout/Layout";

const Contacts = (): JSX.Element => {
  const { t } = useTranslation(["site"]);

  return (
    <Layout title={t("site:contacts")} description={t("site:description")}>
      <ContactsPage />
    </Layout>
  );
};

export default Contacts;
