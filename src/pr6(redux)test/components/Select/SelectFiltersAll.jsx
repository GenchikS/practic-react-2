
export const getFilterSelectorContacts = (contacts, city) => {
  // console.log("city", city);
//   console.log("contacts", contacts);
  switch (city) {
    case `all`:
      return contacts.map((contact) => contact);
    case `${city}`:
      return contacts.filter(
        (contact) => contact.location.slice(9, contact.location.lenght) === city
      );
    default:
      return contacts;
  }
};


export const getFilterTransmissionContacts = (filterContacts, transmission) => {
// console.log("transmission", transmission);
  switch (transmission) {
    case `manual`:
      return filterContacts.filter(
        (contact) => contact.transmission === transmission
      );
    default:
      return filterContacts;
  }
};