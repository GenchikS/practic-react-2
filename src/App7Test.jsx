import { useEffect } from "react";
// import fetchTasks from "./pr7lms/redux/operations.js"
import { useDispatch, useSelector } from "react-redux"
import { fetchTasks } from "./pr7(redux)test/redux/operations.js";
import ContactList from "./pr7(redux)test/components/ContactList/ContactList.jsx";
import NotFound from "./pr7(redux)test/components/NotFound/NotFound.jsx";


export default function App7Test() {
  // 9. Дістаємо зі стану об'єкт зі змінними
  const { items, isLoading, error } = useSelector((state) => state.tasks);
  console.log(isLoading);
  // console.log(error);
  console.log(items.total);


  // 6.  Створення useEffect та виклик fetchTasks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {/* <h2>Hello</h2> */}
      {/* 10.  Додаємо умовний рендеринг компонентів*/}
      {/* {isLoading && !error && <p>Loading task...</p>} */}
      {/* null !== true, тому error не викидає */}
      {/* {error && <p>{error}</p>} */}
      {/* отримання та перевірка масиву */}
      {items.total ? (<ContactList />) : (isLoading && !error && <p>Loading task...</p>)}
    </div>
  );
}

//  5.  Початок в файлі operations
//  7.  Продовження в файлі operations
//  8.  Початок в файлі operations
//  11.  Продовження в файлі operations