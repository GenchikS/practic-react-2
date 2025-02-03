import css from "./TaskCounter.module.css";
// 14. Початок в файлі TaskList.jsx. Імпортуємо useSelector для подальшої підписки на store (redux)
import { useSelector } from "react-redux";
export const TaskCounter = () => {
  // 15.  Отримуємо масив завдань tasks із стану redux (initialState.tasks:items)
  const tasksCounter = useSelector((state) => state.tasks.items);
  // console.log("tasksCounter", tasksCounter);

  // 16. метод .reduce(task) як і .map витягує кожен елемент із масиву об'єктів tasksCounter
  const count = tasksCounter.reduce((acc, task) => {
    // console.log("taskCompleted", task.completed);
    // console.log("taskText", task.text);
    // console.log("acc.completed", acc.completed);

    if (task.completed) {
      acc.completed += 1;
    } else {
      acc.active += 1;
    }
    return acc;
  }, { active: 0, completed: 0});

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};


//  13. перереднє в файлі TaskList.jsx
//  17. наступне в файлі actions.js (створення actions)
