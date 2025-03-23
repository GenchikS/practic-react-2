import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { selectStatusFilter, setStatusFilter } from "../../redux/filtersSlice";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  //  18.  Змінюємо інлайн-ф-ції (state) => state.tasks.isLoading на селектори створені в слайсах
  // const filter = useSelector((state) => state.filters.status);
  const filter = useSelector(selectStatusFilter);


  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === "all"}
        onClick={() => handleFilterChange("all")}
      >
        All
      </Button>
      <Button
        selected={filter === "active"}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </Button>
      <Button
        selected={filter === "completed"}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </Button>
    </div>
  );
};


//  17.  Попереднє в файлі TaskCounter
//  19.  Наступне в файлі taskSlice
