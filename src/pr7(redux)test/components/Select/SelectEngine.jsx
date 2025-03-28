import { useDispatch, useSelector } from "react-redux";
import css from "./SelectEngine.module.css"
import { useId, useState } from "react";
// import { engineSelect } from "../../redux/action.js";
import { engineSelect } from "../../redux/operations.js";
import { selectEngine } from "../../redux/filtersSlice.js";


export default function SelectEngine() {
  const [engine, setEngine] = useState(useSelector(selectEngine));

  const selectId = useId();
  const dispatch = useDispatch();
  const handleEngine = (engine) => {
    // console.log(select);
    setEngine(engine);
    dispatch(engineSelect(engine));
  };

  
    return (
      <div className={css.container}>
        <label htmlFor={selectId} className={css.label}>
          Choose engine
        </label>
        <select
          id={selectId}
          value={engine}
          onChange={(evn) => handleEngine(evn.target.value)}
          className={css.select}
        >
          <option value="all">All</option>
          <option value="diesel">diesel</option>
          <option value="petrol">petrol</option>
          <option value="hybrid">hybrid</option>
        </select>
      </div>
    );
}