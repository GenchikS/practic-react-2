// import { useEffect, useState } from "react";
import ContactForm from "./pr6(redux)/components/ContactForm/ContactForm.jsx";
import ContactList from "./pr6(redux)/components/ContactList/ContactList.jsx";
import SearchBox from "./pr6(redux)/components/SearchBox/SearchBox.jsx";
// import contactDefault from "./pr6(redux)/contactDefault.js";
// import { useSearchParams } from "react-router-dom";

const App6 = () => {
  // const contacts = contactDefault();
  // console.log("contact", contacts);

  // //  зчитування з LS в стан. Якщо там пусто, то по дефолту рендереться contacts
  // const [allContact, setAddContact] = useState((contacts)=>{ 
  //   const contactGetLocal = window.localStorage.getItem("save-contact");
  //   const contactLocalParse = JSON.parse(contactGetLocal);
  //   return contactLocalParse !== null ? contactLocalParse : contacts;
  // });

  // const [searchInputValue, setSearchInputValue] = useSearchParams();
  // const productName = searchInputValue.get("name") ?? "";
  // console.log("productName", productName);



  // const upDateSearchParams = (key, value) => {
  //     const upDateParams = new URLSearchParams(searchInputValue);

  //   if (value !== "") {
  //     upDateParams.set(key, value);
  //   } else {
  //     upDateParams.delete(key);
  //   }
  //   setSearchInputValue(upDateParams);
  // };

return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  );
}

export default App6;
