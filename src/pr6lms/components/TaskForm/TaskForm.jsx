import { Button } from "../Button/Button.jsx";
import css from "./TaskForm.module.css"
// 20. імпортуємо хук useDispatch
import { useDispatch } from "react-redux";
// 21. імпортуємо фабрику addTask
import {addTask} from "../../redux/actions.js"


export const TaskForm = () => {
  //  22. отримуємо посилання на ф-цію відправки екшенів та зберегли в змінній dispatch
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log("form", form);
    // 4. Викликаємо фабрику екшену та передаємо дані для payload
    dispatch(addTask({
      id: crypto.randomUUID(),
      completed: false,
      text: form.elements.text.value
    }))
    form.reset();
  };
  // console.log("addTask", addTask("hello"));
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
