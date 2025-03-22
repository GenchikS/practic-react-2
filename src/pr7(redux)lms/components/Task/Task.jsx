import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/operations.js";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  // 7.  Додаємо ф-цію handleDelete в button onClick={handleDelete}
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  // 10.  Додаємо ф-цію handleToggle в input onChange={handleToggle}
  const handleToggle = () => {
    dispatch(toggleCompleted(task));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        checked={task.completed}
        className={css.checkbox}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

// 6.  Попереднє в файлі operations
// 8.  Наступне в файлі taskSlice

// 9.  Попереднє в файлі operations
// 11.  Наступне в файлі taskSlice
