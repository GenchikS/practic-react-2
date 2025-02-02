import css from "./Contact.module.css"

export default function Contact({ name, number, id, onDelete }) {
  return (
    <div className={css.contactContainer}>
      <ul className={css.list}>
        <li>
          <p className={css.textName}>{name}</p>
        </li>
        <li>
          <p className={css.textName}>{number}</p>
        </li>
      </ul>
      <button onClick={()=>onDelete(id)} className={css.button}>
        Delete
      </button>
    </div>
  );
}