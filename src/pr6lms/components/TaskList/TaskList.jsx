import css from "./TaskList.module.css"
import { Task } from "../Task/Task.jsx"
// 8. Початок в файлі StatusFilter.jsx. Імпортуємо useSelector для подальшої підписки на store (redux)
import { useSelector } from "react-redux";


// 12. створення ф-ції фільтрації за статусом
const getVisibleTasks = (tasks, statusFiltersTaskList) => {
  // console.log("statusFiltersTaskList", statusFiltersTaskList);
  switch (statusFiltersTaskList) {
    case `active`:
      return tasks.filter(task => !task.completed);
    case `completed`:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
}; 

export const TaskList = () => {
  // 9.  Отримуємо масив завдань tasks із стану redux (initialState.tasks:items)
  const tasks = useSelector((state) => state.tasks.items);
  // console.log("tasks", tasks);
  // 10. Отримуємо значення фільтру (filters) із стану redux, який ми оголосили в store.js (initialState.filters: "all")
  //  для збереження даних була створена нова змінна statusFiltersTascList
  const statusFiltersTaskList = useSelector((state) => state.filters.status);
  // console.log("statusFiltersTaskList", statusFiltersTaskList);
  // 11. обчислюємо масив з необхідним фільтром статусу
  const visibleTasks = getVisibleTasks(tasks, statusFiltersTaskList);
  return (
    <ul className={css.list}>
      {/* 13. змінюємо пустий tasks = [] на відфільтрований visibleTasks*/}
      {/* {tasks.map((task) => ( */}
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};


//  7. попереднє в файлі StatusFilter.jsx
//  14. наступне в файлі TaskCounter.jsx
