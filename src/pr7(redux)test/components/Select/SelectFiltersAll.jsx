
export const getFilterSelectorCity = (items, filterCity) => {
  // console.log("filterCity", filterCity);
  //   console.log("items", items);
  switch (filterCity) {
    case `all`:
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
  // console.log("filterCity", filterCity);
  // console.log("filterTransmissionState", filterTransmissionState);
  switch (filterTransmissionState) {
    case `all`:
      return filterCity.map((contact) => contact);
    case `${filterTransmissionState}`:
      return filterCity.filter(
        (contact) => contact.transmission === filterTransmissionState
      );
    default:
      return filterCity;
  }
};

export const getFilterEngine = (filterTransmission, filterEngineState) => {
  // console.log("filterTransmission", filterTransmission);
  // console.log("engine", engine);
  switch (filterEngineState) {
    case "all":
      return filterTransmission.map((contact) => contact);
    case `${filterEngineState}`:
      return filterTransmission.filter(
        (contact) => contact.engine === filterEngineState
      );
    default:
      return filterTransmission;
  }
};