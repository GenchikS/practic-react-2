import css from "./ContactList.module.css"
// import { useEffect, useState } from "react";
// import { contactsApi } from "../../contactsApi.js";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { getFilterSelectorCity, getFilterTransmission } from "../Select/SelectFiltersAll.jsx";
import { selectCity, selectTransmission } from "../../redux/filtersSlice.js";
// import { selectCity } from "../../redux/filtersSlice.js";
// import { getFilterEngine, getFilterSelectorContacts, getFilterTransmissionContacts } from "../Select/SelectFiltersAll.jsx";
// import NotFound from "../NotFound/NotFound.jsx";

export default function ContactList() {
  const { items, isLoading, error } = useSelector((state) => state.tasks.items);
  // console.log("items", items.items);
  // const itemsAll = items;
  // console.log("itemsAll", itemsAll);
  // const filterCity = us

  // console.log("selectCity", selectCity);

  // const [contacts, setContact] = useState([]);
  const filterCityState = useSelector(selectCity);
  const filterTransmissionState = useSelector(selectTransmission);
 console.log("filterTransmissionState", filterTransmissionState);
  
  // const transmission = useSelector((state) => state.filters.transmission);
  // console.log("transmission", transmission);

  // const engine = useSelector((state) => state.filters.engine);
  
  // useEffect(() => {
  //   async function featchData() {
  //     const data = await contactsApi();
      
  //     setContact(data.items);
  //   }
  //   featchData();
  // }, []);
  // console.log(contacts);

  // 9.  Створюємо ф-цію фшльтрації за містом
  const filterCity = getFilterSelectorCity(items, filterCityState);
  // console.log("filterContacts", filterCity);

  const filterTransmission = getFilterTransmission(
    filterCity,
    filterTransmissionState
  );
  console.log("filterTransmission", filterTransmission);

  // const filterEngine = getFilterEngine(filterTransmission, engine);
  // console.log("filterEngine", filterEngine);

   return (
     <ul className={css.container}>
       {/* 10.  Змінюємо contacts на відфільтрований масив filterContacts */}
       {/* використано  умовний рендеренг*/}
       {filterTransmission.map((item) => (
         <li key={item.id} className={css.list}>
           <Contact item={item} />
         </li>
       ))}
     </ul>
   );
}


//  8. Попереднє в файлі action
//  11. Наступне в файлі store (створення slice)

