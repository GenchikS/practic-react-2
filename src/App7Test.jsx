import { useEffect } from "react";
// import fetchTasks from "./pr7lms/redux/operations.js"
import { useDispatch, useSelector } from "react-redux"
import { fetchTasks } from "./pr7(redux)test/redux/operations.js";
import ContactList from "./pr7(redux)test/components/ContactList/ContactList.jsx";
// import NotFound from "./pr7(redux)test/components/NotFound/NotFound.jsx";
import Filter from "./pr7(redux)test/components/Filter/Filter.jsx";


export default function App7Test() {
  // 9. Дістаємо зі стану об'єкт зі змінними
  const { items, isLoading, error } = useSelector((state) => state.tasks);
  // console.log(isLoading);
  // console.log(error);
  // console.log(items.total);

  // const { city } = useSelector((state) => state.filters);
  // console.log(city);


  // 6.  Створення useEffect та виклик fetchTasks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <Filter/>
      {items.total ? (<ContactList />) : (isLoading && !error && <p>Loading task...</p>)}
    </div>
  );
}

//  5.  Початок в файлі operations
//  7.  Продовження в файлі operations
//  8.  Початок в файлі operations
//  11.  Продовження в файлі operations