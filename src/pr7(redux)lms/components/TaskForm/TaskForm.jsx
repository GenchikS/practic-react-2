import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";
import { addTask } from "../../redux/operations.js";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // 4.  Діспатчимо введений текст в ф-цію addTask
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

// 3.  Попереднє в файлі operations
// 5.  Наступне в файлі taskSlice
