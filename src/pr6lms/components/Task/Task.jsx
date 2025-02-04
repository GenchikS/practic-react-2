import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import {deleteTask, toggleTask} from "../../redux/actions.js"
import { useDispatch } from "react-redux";

export const Task = ({ task }) => {
  // console.log("task.id", task.id)
  const dispatch = useDispatch();

  //  onClick для видалення
  const handleClick = () => {
    // console.log("task.id", task.id);
    dispatch(deleteTask(task.id));
  };

  //  onChange для перемикання статусу
  const handleToggle = () => {
    // console.log("task.id", task.id);
    // console.log("task.completed", task.completed);

    dispatch(toggleTask(task.id));
    
  };
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button type="button" className={css.btn} onClick={handleClick}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
