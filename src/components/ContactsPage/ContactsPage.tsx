import { FunctionComponent } from "react";
import classNames from "classnames";
import { siteContainer, contactsHeader } from "./ContactsPage.module.scss";
import Contacts from "./contacts-page-components/Contacts/Contacts";
import FeedbackForm from "./contacts-page-components/FeedbackForm/FeedbackForm";

const ContactsPage: FunctionComponent = () => (
  <>
    <div id="contacts-header">
      <div className={contactsHeader} />
    </div>

    <div className={classNames(siteContainer, "mx-auto text-center")}>
      <Contacts />

      <FeedbackForm />
    </div>
  </>
);

export default ContactsPage;
