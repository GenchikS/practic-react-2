// import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { selectGetVisibleTasks } from "../../redux/taskSlice.js";
// import { selectTask } from "../../redux/taskSlice.js";
// import { selectStatusFilter } from "../../redux/filtersSlice.js";


//   21.  Видаляємо ф-цію getVisibleTasks, т.я. ми її перенесли в файл taskSlice
// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case "active":
//       return tasks.filter((task) => !task.completed);
//     case "completed":
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };

export const TaskList = () => {
  //  16.  Змінюємо інлайн-ф-ції (state) => state.tasks.isLoading на селектори створені в слайсах
  // const tasks = useSelector((state) => state.tasks.items);

  //   20.  Переносимо tasks та statusFilter в файл taskSlice
  // const tasks = useSelector(selectTask);

  // const statusFilter = useSelector((state) => state.filters.status);
  // const statusFilter = useSelector(selectStatusFilter);

  //   21.  Змінюємо змінну на виклик selectGetVisibleTasks з файлу taskSlice
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);
  const visibleTasks = selectGetVisibleTasks();

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};


//  15.  Попереднє в файлі App7lms
//  17.  Наступне в файлі TaskCounter

