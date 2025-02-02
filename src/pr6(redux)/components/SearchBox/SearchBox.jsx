import css from "./SearchBox.module.css"
// import { useState } from "react"

export default function SearchBox({ value, handleChange }) {
    // console.log("value", value)
  return (
    <div className={css.container}>
      <p className={css.findContact}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <p className={css.textValue}>Введений пошук: {value}</p>
    </div>
  );
}