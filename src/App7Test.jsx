import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchTasks } from "./pr7(redux)test/redux/operations.js";
import ContactList from "./pr7(redux)test/components/ContactList/ContactList.jsx";
import Filter from "./pr7(redux)test/components/Filter/Filter.jsx";


export default function App7Test() {
  const { items, isLoading, error } = useSelector((state) => state.tasks);
  // console.log(isLoading);
  // console.log(error);
  // console.log(items.total);

  // const { city } = useSelector((state) => state.filters);
  // console.log(city);

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
