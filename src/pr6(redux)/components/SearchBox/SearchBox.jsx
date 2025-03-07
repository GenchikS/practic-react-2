import { statusFilter } from "../../redux/filtersSlice.js";
import { searchContact } from "../../redux/tasksSlice.js";

import { Button } from "./Button/Button.jsx";
import css from "./SearchBox.module.css"
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function SearchBox() {
  const [valueSearch, setValueSearch] = useState("")
  // console.log("value", value)
  const dispatch = useDispatch();

  const handleChange = (env) => {
    // console.log("env", env);
    setValueSearch(env)
dispatch(searchContact(env.toLowerCase()));
  }
 
  const handleStatusFilter = (filter) => {
    // console.log("filter", filter);
    dispatch(statusFilter(filter));
  }
  return (
    <div className={css.container}>
      <div>
        <h3>SearchBox</h3>
        <p className={css.findContact}>Find contacts by name</p>
        <input
          type="text"
          value={valueSearch}
          onChange={(e) => handleChange(e.target.value)}
        />
        <p className={css.textValue}>Введений пошук: {valueSearch}</p>
      </div>
      <div className={css.containerOptoins}>
        <Button onClick={() => handleStatusFilter("all")}>All</Button>
        <Button onClick={() => handleStatusFilter("good")}>Good</Button>
        <Button onClick={() => handleStatusFilter("neutral")}>Neutral</Button>
        <Button onClick={() => handleStatusFilter("bad")}>Bad</Button>
      </div>
    </div>
  );
}