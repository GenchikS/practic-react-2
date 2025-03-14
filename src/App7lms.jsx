import css from "./App7lms.module.css";
import { AppBar } from "./pr7(redux)lms/components/AppBar/AppBar.jsx";
import { TaskForm } from "./pr7(redux)lms/components/TaskForm/TaskForm.jsx";
import { TaskList } from "./pr7(redux)lms/components/TaskList/TaskList.jsx";



export default function App7lms() {
  return (
    <div className={css.container}>
      <AppBar />
      <TaskForm />
      <TaskList />
    </div>
  );
}
