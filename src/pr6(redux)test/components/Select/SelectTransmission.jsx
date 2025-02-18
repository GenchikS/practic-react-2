import { useId, useState } from "react";
import css from "./SelectTransmission.module.css";
import { useDispatch, useSelector } from "react-redux";
import { transmissionSelect } from "../../redux/action.js";

export default function SelectTransmission() {
    const [transmission, setTransmission] = useState(useSelector((state)=> state.filters.transmission))
    // console.log("transmission", transmission);
    const selectIdTransmission = useId();
    const dispatch = useDispatch();

    const handleTransmission = (select) => {
        // console.log("select", select)
        setTransmission(select);
        dispatch(transmissionSelect(select));
    }
    return (
      <div className={css.container}>
        <label htmlFor={selectIdTransmission} className={css.label}>Choose transmission</label>
        <select value={transmission} id={selectIdTransmission} onChange={(evn)=> handleTransmission(evn.target.value)} className={css.select}>
          <option value="all">All</option>
          <option value="manual">manual</option>
          <option value="automatic">automatic</option>
        </select>
      </div>
    );
}