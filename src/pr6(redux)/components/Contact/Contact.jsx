import css from "./Contact.module.css"

export default function Contact({contacts}) {
    return (
      <div className={css.container}>
        {contacts.map((contact) => (
          <div key={contact.id} className={css.contactContainer}>
            <ul className={css.list}>
              <li>
                <p>{contact.name}</p>
              </li>
              <li><p>{contact.number }</p></li>
                </ul>
                <button type="button" className={css.button}>Delete</button>
          </div>
        ))}
      </div>
    );
}