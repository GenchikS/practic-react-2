import css from "./TaskList.module.css"
import { Task } from "../Task/Task.jsx"

export const TaskList = () => {
  const tasks = [];
return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
