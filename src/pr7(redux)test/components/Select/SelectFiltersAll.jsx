
export const getFilterSelectorCity = (items, filterCity) => {
  // console.log("filterCity", filterCity);
  //   console.log("items", items);
  switch (filterCity) {
    case `All`:
      return items.map((contact) => contact);
    case `${filterCity}`:
      return items.filter(
        (contact) =>
          contact.location.slice(9, contact.location.lenght) === filterCity
      );
    default:
      return items;
  }
};


export const getFilterTransmission = (filterCity, filterTransmissionState) => {
  // console.log("filterContacts", filterContacts);
  switch (filterTransmissionState) {
    case `All`:
      return filterCity.map((contact) => contact);
    case `${filterTransmissionState}`:
      return filterCity.filter(
        (contact) => contact.transmission === filterTransmissionState
      );
    default:
      return filterCity;
  }
};

export const getFilterEngine = (filterTransmission, engine) => {
  // console.log("filterTransmission", filterTransmission);
  // console.log("engine", engine);
  switch (engine) {
    case "All":
      return filterTransmission.map((contact) => contact);
    case `${engine}`:
      return filterTransmission.filter((contact) => contact.engine === engine);
    default:
      return filterTransmission;
  }
};