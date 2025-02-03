import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";

//  5. Початок в файлі Store.js. Імпортуємо useSelector для подальшої підписки на store (redux)
import { useSelector } from "react-redux";

export const StatusFilter = () => {
  // 6. Отримуємо значення фільтру (filters) із стану redux, який ми оголосили в store.js (initialState.filters: "all")
  const filter = useSelector((state) => state.filters.status);
  // console.log("filter", filter);

  return (
    <div className={css.wrapper}>
      {/* 7. використовуємо значення filter зі стану */}
      <Button>All {filter === "all" && "is active"}</Button>
      <Button>Active {filter === "active" && "is active"}</Button>
      <Button>Completed {filter === "completed" && "is active"}</Button>
    </div>
  );
};


//  4. перереднє в файлі store.js
//  8. наступне в файлі TaskList.jsx