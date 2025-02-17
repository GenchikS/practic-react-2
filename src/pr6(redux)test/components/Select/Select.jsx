import css from "./Select.module.css"
import { useId, useState } from "react";

import { useSelector } from "react-redux";

export default function Select() {
  const selectId = useId();
  
  const [city, setCity] = useState(
      // відразу дістаємо стан зі state
      useSelector((state) => state.filters.city)
    );
  console.log(city);
  
  // 4. Прописуємо в main Provider з пропсом store зі шляхом до store
  // 5. Можемо діставати стан зі state через useSelector
  // const filterSelect = useSelector((state) => state.filters.city)
  // console.log("filterSelect", filterSelect);
  

    return (
      <div className={css.container}>
        <label htmlFor={selectId} className={css.label}>Choose City</label>
        <select
          id={selectId}
          value={city}
          onChange={(evn) => setCity(evn.target.value)}
          className={css.select}
        >
          <option value="Kiyv">Kiyv</option>
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