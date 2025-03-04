import css from "./ContactList.module.css"
import { useEffect, useState } from "react";
import { contactsApi } from "../../contactsApi.js";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { getFilterEngine, getFilterSelectorContacts, getFilterTransmissionContacts } from "../Select/SelectFiltersAll.jsx";
import NotFound from "../NotFound/NotFound.jsx";

export default function ContactList() {
  const [contacts, setContact] = useState([]);
  const city = useSelector((state) => state.filters.city);
 // console.log("city", city);
  
  const transmission = useSelector((state) => state.filters.transmission);
  // console.log("transmission", transmission);

  const engine = useSelector((state) => state.filters.engine);
  
  useEffect(() => {
    async function featchData() {
      const data = await contactsApi();
      
      setContact(data.items);
    }
    featchData();
  }, []);
  // console.log(contacts);

  // 9.  Створюємо ф-цію фшльтрації за містом
  const filterContacts = getFilterSelectorContacts(contacts, city);
  // console.log("filterContacts", filterContacts);

  const filterTransmission = getFilterTransmissionContacts(filterContacts, transmission);
  // console.log("filterTransmission", filterTransmission);

  const filterEngine = getFilterEngine(filterTransmission, engine);
  // console.log("filterEngine", filterEngine);

   return (
      <ul className={css.container}>
        {/* 10.  Змінюємо contacts на відфільтрований масив filterContacts */}
        {/* використано  умовний рендеренг*/}
        {filterEngine.length ? (
          filterEngine.map((item) => (
            <li key={item.id} className={css.list}>
              <Contact item={item} />
            </li>
          ))
        ) : (
          <NotFound />
        )}
      </ul>
    );
}


