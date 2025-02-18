import css from "./ContactList.module.css"
import { useEffect, useState } from "react";
import { contactsApi } from "../../contactsApi.js";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { getFilterSelectorContacts, getFilterTransmissionContacts } from "../Select/SelectFiltersAll.jsx";

export default function ContactList() {
  const [contacts, setContact] = useState([]);
  const city = useSelector((state) => state.filters.city);
 // console.log("city", city);
  
  const transmission = useSelector((state) => state.filters.transmission)
  // console.log("transmission1", transmission);

  useEffect(() => {
    async function featchData() {
      const data = await contactsApi();
      setContact(data.items);
    }
    featchData(contacts);
  }, []);
  // console.log(contacts);

  // 9.  Створюємо ф-цію фшльтрації за містом
  const filterContacts = getFilterSelectorContacts(contacts, city);
  // console.log("filterContacts", filterContacts);

  const filterTransmission = getFilterTransmissionContacts(filterContacts, transmission);
  // console.log("filterTransmission", filterTransmission);
  return (
    <ul className={css.container}>
      {/* 10.  Змінюємо contacts на відфільтрований масив filterContacts */}
      {filterTransmission.map((item) => (
        <li key={item.id} className={css.list}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
}
