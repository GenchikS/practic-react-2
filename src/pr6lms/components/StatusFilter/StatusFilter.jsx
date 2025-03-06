// import { statusFilter } from "../../redux/actions.js";
//  30. Оновлення імпорту statusFilter
import { statusFilter } from "../../redux/filtersSlice.js";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch } from "react-redux";

//  5. Початок в файлі Store.js. Імпортуємо useSelector для подальшої підписки на store (redux)
// import { useSelector } from "react-redux";

export const StatusFilter = () => {
  // 6. Отримуємо значення фільтру (filters) із стану redux, який ми оголосили в store.js (initialState.filters: "all")
  // const filter = useSelector((state) => state.filters.status);
  // console.log("filter", filter);
  const dispatch = useDispatch();
  const handleStatusFilter = (filter) => {
    // console.log("filter", filter);
    dispatch(statusFilter(filter));
  }

  return (
    <div className={css.wrapper}>
      {/* 7. використовуємо значення filter зі стану */}
      <Button onClick={()=>handleStatusFilter("all")}>All</Button>
      <Button onClick={()=>handleStatusFilter("active")}>Active</Button>
      <Button onClick={(()=> handleStatusFilter("completed"))}>Completed</Button>
    </div>
  );
};


//  4. попереднє в файлі store.js
//  8. наступне в файлі TaskList.jsx