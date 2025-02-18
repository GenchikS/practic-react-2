import css from "./Filter.module.css"
import SelectCity from "../Select/SelectCity.jsx";
import SelectTransmission from "../Select/SelectTransmission.jsx";

export default function Filter() {
    return (
      <div className={css.container}>
        <SelectCity />
        <SelectTransmission />
      </div>
    );
}