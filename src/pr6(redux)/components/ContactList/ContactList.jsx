import Contact from "../Contact/Contact.jsx";

export default function ContactList({contacts}) {
    return (
        <div>
            <h3>ContactList</h3>
            <Contact contacts={contacts } />
        </div>
    )
}