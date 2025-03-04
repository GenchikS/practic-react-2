
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
  // console.log("filterContacts", filterContacts);
  switch (transmission) {
    case `all`:
      return filterContacts.map((contact) => contact);
    case `${transmission}`:
      return filterContacts.filter(
        (contact) => contact.transmission === transmission
      );
    default:
      return filterContacts;
  }
};

export const getFilterEngine = (filterTransmission, engine) => {
  // console.log("filterTransmission", filterTransmission);
  // console.log("engine", engine);
  switch (engine) {
    case "all":
      return filterTransmission.map((contact) => contact);
    case `${engine}`:
      return filterTransmission.filter((contact) => contact.engine === engine);
    default:
      return filterTransmission;
  }
};