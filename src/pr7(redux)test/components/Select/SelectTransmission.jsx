import { useId, useState } from "react";
import css from "./SelectTransmission.module.css";
import { useDispatch, useSelector } from "react-redux";
import { transmissionSelect } from "../../redux/operations.js"
import { selectTransmission } from "../../redux/filtersSlice.js";


export default function SelectTransmission() {
  const [transmission, setTransmission] = useState(
    useSelector(selectTransmission)
  );
  // console.log("transmission", transmission);
 
  const selectIdTransmission = useId();
  const dispatch = useDispatch();

   const handleTransmission = (transmission) => {
     // console.log("transmission", transmission)
     setTransmission(transmission);
     dispatch(transmissionSelect(transmission));
   };
  return (
    <div className={css.container}>
      <label htmlFor={selectIdTransmission} className={css.label}>
        Choose transmission
      </label>
      <select
        value={transmission}
        id={selectIdTransmission}
        onChange={(evn) => handleTransmission(evn.target.value)}
        className={css.select}
      >
        <option value="all">All</option>
        <option value="manual">manual</option>
        <option value="automatic">automatic</option>
      </select>
    </div>
  );
}