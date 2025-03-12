import { useEffect } from "react"
// import fetchTasks from "./pr7lms/redux/operations.js"
import { useDispatch } from "react-redux"
import { fetchTasks } from "./pr7lms/redux/operations.js";
export default function App7lms() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchTasks());
    }, [dispatch]);
    
    return (
        <div>
            <h2>App7lms</h2>
        </div>
    )
}