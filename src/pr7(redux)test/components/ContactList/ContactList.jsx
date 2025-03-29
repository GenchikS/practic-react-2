import css from "./ContactList.module.css"
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { getFilterEngine, getFilterSelectorCity, getFilterTransmission } from "../Select/SelectFiltersAll.jsx";
import { selectCity, selectEngine, selectTransmission } from "../../redux/filtersSlice.js";
import NotFound from "../NotFound/NotFound.jsx";


export default function ContactList() {
  const { items, isLoading, error } = useSelector((state) => state.tasks.items);

  const filterCityState = useSelector(selectCity);
  const filterTransmissionState = useSelector(selectTransmission);
  const filterEngineState = useSelector(selectEngine);

  // фільтри, можна додати безліч
  const filterCity = getFilterSelectorCity(items, filterCityState);
  const filterTransmission = getFilterTransmission(filterCity, filterTransmissionState);
  const filterTotal = getFilterEngine(filterTransmission, filterEngineState);
  // console.log("filterTotal", filterTotal);

  return (
    <ul className={css.container}>
      {filterTotal.length > 0 ? (
        filterTotal.map((item) => (
          <li key={item.id} className={css.list}>
            <Contact item={item} />
          </li>
        ))
      ) : (
        <NotFound/>
      )}
    </ul>
  );
}

