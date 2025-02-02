import { useEffect, useState } from "react";
import ContactForm from "./pr6(redux)/components/ContactForm/ContactForm.jsx";
import ContactList from "./pr6(redux)/components/ContactList/ContactList.jsx";
import SearchBox from "./pr6(redux)/components/SearchBox/SearchBox.jsx";
import contactDefault from "./pr6(redux)/contactDefault.js";
import { useSearchParams } from "react-router-dom";

const App6 = () => {
    const contacts = contactDefault();
    // console.log("contact", contacts);
    const [addContact, setAddContact] = useState(contacts);
    
const [searchInputValue, setSearchInputValue] = useSearchParams();
const productName = searchInputValue.get("name") ?? "";    

    const upDateSearchParams = (key, value) => {
        const upDateParams = new URLSearchParams(searchInputValue);
        if (value !== "") {
            upDateParams.set(key, value);
        } else {
            upDateParams.delete(key);
        }    
        setSearchInputValue(upDateParams)
    }

const filterParamsContact = addContact.filter((contact) =>
  contact.name.toLowerCase().includes(productName.toLowerCase())
);

const handleSubmit = (value, actions) => {
        //  console.log("value", value);
         value=[...addContact, value]
          setAddContact(value)
        actions.resetForm();
      };

    const handleDelete = (id) => {
            const contactDelete = addContact.filter((contact) => id !== contact.id);
        setAddContact(contactDelete);
    }

return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm onSubmit={handleSubmit} />
    <SearchBox
      value={productName}
      handleChange={(value) => upDateSearchParams("name", value)}
    />
    <ContactList contacts={filterParamsContact} onDelete={handleDelete} />
  </div>
);
}

export default App6;
