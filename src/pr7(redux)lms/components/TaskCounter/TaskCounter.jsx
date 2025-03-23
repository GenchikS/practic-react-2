import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
// import { selectTask } from "../../redux/taskSlice.js";
import {  selectTaskCounter } from "../../redux/taskSlice.js";


export const TaskCounter = () => {
  //   17.  Змінюємо інлайн-ф-ції (state) => state.tasks.isLoading на селектори створені в слайсах
  // const tasks = useSelector((state) => state.tasks.items);

  //  24.  Видаляємо лічильник та переносимо логіку в файл taskSlice
  // const tasks = useSelector(selectTask);
  //  console.log("coun");
  const count = useSelector(selectTaskCounter);

  // const count = tasks.reduce(
  //   (acc, task) => {
  //     if (task.completed) {
  //       acc.completed += 1;
  //     } else {
  //       acc.active += 1;
  //     }
  //     return acc;
  //   },
  //   { active: 0, completed: 0 }
  // );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};


//  16.  Попереднє в файлі taskSlice
//  18.  Наступне в файлі statusFilter

//  23. Попереднє в файлі taskSlice
//  25. Наступне в файлі taskSlice