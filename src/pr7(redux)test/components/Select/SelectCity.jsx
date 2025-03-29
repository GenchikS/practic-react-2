import css from "./SelectCity.module.css"
import { useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { citySelect } from "../../redux/operations.js";
import { selectCity } from "../../redux/filtersSlice.js";


export default function Select() {
  const selectId = useId();
  const [city, setCity] = useState(useSelector(selectCity));
  // console.log("city", city);

  const dispatch = useDispatch();

  const handleCity = (city) => {
    // console.log(city);
    setCity(city);
    dispatch(citySelect(city));
  };

  return (
    <div className={css.container}>
      <label htmlFor={selectId} className={css.label}>
        Choose City
      </label>
      <select
        id={selectId}
        value={city}
        // Змінюємо стан setCity (перемістили його в ф-цію) на ф-цію handleCity для отримення вибраного міста
        // onChange={(evn) => setCity(evn.target.value)}
        onChange={(evn) => handleCity(evn.target.value)}
        className={css.select}
      >
        <option value="all">All</option>
        <option value="Kyiv">Kiyv</option>
        <option value="Poltava">Poltava</option>
        <option value="Dnipro">Dnipro</option>
        <option value="Odesa">Odesa</option>
        <option value="Kharkiv">Kharkiv</option>
        <option value="Lviv">Lviv</option>
        <option value="Sumy">Sumy</option>
      </select>
    </div>
  );
}
