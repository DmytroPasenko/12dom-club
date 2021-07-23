import { FunctionComponent } from "react";
import { contacts } from "./Contacts.module.scss";

const Contacts: FunctionComponent = () => (
  <>
    <h3 className="uppercase">Contacts</h3>
    <div className={contacts}>
      <p>Adress:</p>
      <p>Phones:</p>
      <p>E-mail:</p>
      <p>We are open:</p>
    </div>
  </>
);

export default Contacts;
