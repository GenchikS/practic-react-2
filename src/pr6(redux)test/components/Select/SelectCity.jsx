import css from "./SelectCity.module.css"
import { useId, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { citySelect } from "../../redux/action.js";

export default function Select() {
  const selectId = useId();

  const [city, setCity] = useState(
    // відразу дістаємо стан зі state
    useSelector((state) => state.filters.city)
  );
  // console.log(city);
  // 7. Створюємо useDispatch та прописуємо стан за defautl
  const dispatch = useDispatch();

  // 4. Прописуємо в main Provider з пропсом store зі шляхом до store
  // 5. Можемо діставати стан зі state через useSelector
  // const city = useSelector((state) => state.filters.city);
  // console.log("city", city);

  // 6. Замінюємо місто в стані useState (setCity - в select) на dispatch
  const handleCity = (select) => {
    // console.log(select);
    setCity(select)
    dispatch(citySelect(select));
  };

  
  return (
    <div className={css.container}>
      <label htmlFor={selectId} className={css.label}>
        Choose City
      </label>
      <select
        id={selectId}
        value={city}
        // 7.1 Змінюємо стан setCity (перемістили його в ф-цію) на ф-цію handleCity для отримення вибраного міста
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