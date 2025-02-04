import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css"


const getFilterStatusFunction = (tasks, filterStatusList) => {
  // console.log("filterStatusList", filterStatusList);
  switch (filterStatusList) {
    case `good`:
      return tasks.filter((task) => task.options === filterStatusList);
    case `neutral`:
      return tasks.filter((task) => task.options === filterStatusList);
    default:
      return tasks;
  }
  
};


export default function ContactList() {
  const tasks = useSelector((state) => state.tasks.items);
  const filterStatusList = useSelector((state)=> state.filters.status)
  // console.log("tasks", tasks);
  // console.log("filterStatusList", filterStatusList);
  const newContactsList = getFilterStatusFunction(tasks, filterStatusList);
  // console.log("newContactsList", newContactsList);
  return (
    <div>
      <h3>ContactList</h3>
      <ul className={css.container}>
        {newContactsList.map((contact) => (
          <li key={contact.id} className={css.contactContainer}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              options={contact.options}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}