import { useDispatch } from "react-redux";
import css from "./Contact.module.css"
import { deleteContact } from "../../redux/actions.js";

export default function Contact({ name, number, id, options }) {
  const dispatch = useDispatch();
  const onDelete = () => {
        dispatch(deleteContact(id));
    };
return (
    <div className={css.contactContainer}>
      <ul className={css.list}>
        <li>
          <p className={css.textName}>{name}</p>
        </li>
        <li>
          <p className={css.textName}>{number}</p>
        </li>
        <li className={css.textNameOptions}>
          <p className={css.textName}>{options}</p>
        </li>
      </ul>
      <button onClick={() => onDelete(id)} className={css.button}>
        Delete
      </button>
    </div>
  );
}