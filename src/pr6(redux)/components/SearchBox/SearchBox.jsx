import { statusFilter } from "../../redux/actions.js";
import { Button } from "./Button/Button.jsx";
import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux";

export default function SearchBox({ value, handleChange }) {
  // console.log("value", value)
  const filter = useSelector((state) => state.filters.status);
    // console.log("filter", filter);

  const dispatch = useDispatch();
 
  const handleStatusFilter = (filter) => {
    // console.log("filter", filter);
    dispatch(statusFilter(filter));
  }
  return (
    <div className={css.container}>
      <div>
        <p className={css.findContact}>Find contacts by name</p>
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        <p className={css.textValue}>Введений пошук: {value}</p>
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