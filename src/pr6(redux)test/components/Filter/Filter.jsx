import css from "./Filter.module.css"
import SelectCity from "../Select/SelectCity.jsx";
import SelectTransmission from "../Select/SelectTransmission.jsx";
import SelectEngine from "../Select/SelectEngine.jsx";

export default function Filter() {
    return (
      <div className={css.container}>
        <SelectCity />
        <SelectTransmission />
        <SelectEngine/>
      </div>
    );
}