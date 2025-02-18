import css from "./ContactList.module.css"
import { useEffect, useState } from "react";
import { contactsApi } from "../../contactsApi.js";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { getFilterSelectorContacts } from "../Select/SelectFilters.jsx";

export default function ContactList() {
  const [contacts, setContact] = useState([]);

  const city = useSelector((state) => state.filters.city);
  // console.log("city", city);

  useEffect(() => {
    async function featchData() {
      const data = await contactsApi();
      setContact(data.items);
    }
    featchData(contacts);
  }, []);
  // console.log(contacts);

  // 9.  Створюємо ф-цію фшльтрації за містом
  const filterContacts = getFilterSelectorContacts(contacts, city)
  // console.log("filterContacts", filterContacts);

  return (
    <ul className={css.container}>
      {/* 10.  Змінюємо contacts на відфільтрований масив filterContacts */}
      {filterContacts.map((item) => (
        <li key={item.id} className={css.list}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
}
