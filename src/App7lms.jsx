import { useEffect } from "react";
// import fetchTasks from "./pr7lms/redux/operations.js"
import { useDispatch, useSelector } from "react-redux"
import { fetchTasks } from "./pr7lms/redux/operations.js";

export default function App7lms() {
  // 9. Дістаємо зі стану об'єкт зі змінними
  const { items, isLoading, error } = useSelector((state) => state.tasks);
  // console.log(isLoading);
  // console.log(error);
  // console.log(items.items);


  // 6.  Створення useEffect та виклик fetchTasks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {/* <h2>Hello</h2> */}
      {/* 10.  Додаємо умовний рендеринг компонентів*/}
      {isLoading && <p>Loading task...</p>}
      {/* null !== true, тому error не викидає */}
      {error && <p>{error}</p>}
      {/* отримання та перевірка масиву */}
      {items.total > 0 && JSON.stringify(items.items, null, 2)}
    </div>
  );
}

//  5.  Початок в файлі operations
//  7.  Продовження в файлі operations
//  8.  Початок в файлі operations
//  11.  Продовження в файлі operations