import css from "./ContactList.module.css"
import { useEffect, useState } from "react";
import { contactsApi } from "../../contactsApi.js";
import Contact from "../Contact/Contact.jsx";

export default function ContactList() {
  const [contacts, setContact] = useState([]);
  useEffect(() => {
    async function featchData() {
      const data = await contactsApi();
      setContact(data.items);
    }
    featchData(contacts);
  }, []);
  // console.log(contacts);

  return (
    <ul className={ css.container}>
      {contacts.map((item) => (
        <li key={item.id} className={css.list}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
}
