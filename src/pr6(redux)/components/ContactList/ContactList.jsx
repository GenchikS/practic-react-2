import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css"

export default function ContactList({ contacts }) {
    return (
      <div>
        <h3>ContactList</h3>
        <ul className={css.container}>
          {contacts.map((contact) => (
            <li key={contact.id} className={css.contactContainer}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </li>
          ))}
        </ul>
      </div>
    );
}