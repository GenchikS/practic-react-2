import { useDispatch, useSelector } from "react-redux";
import css from "./App7lms.module.css";
import { AppBar } from "./pr7(redux)lms/components/AppBar/AppBar.jsx";
import { TaskForm } from "./pr7(redux)lms/components/TaskForm/TaskForm.jsx";
import { TaskList } from "./pr7(redux)lms/components/TaskList/TaskList.jsx";
import { useEffect } from "react";
import { fetchTasks } from "./pr7(redux)lms/redux/operations.js"



export default function App7lms() {
  const dispatch = useDispatch();

  // 2.  Добавляємо індикатори запитів з tasksSlice
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector((state) => state.tasks.error);
  // console.log("isL",isLoading);
  // console.log("er", error);


  // 1.  Добавляємо в useEffect та запускаємо fetchTasks при монтуванні
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress....</b>}
      <TaskList />
    </div>
  );
}
