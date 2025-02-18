import css from "./Contact.module.css"

export default function Contact({ item }) {
  // console.log(item);
  return (
    <div className={css.containerContact}>
      <p>{item.name}</p>
      <p className={css.location}>{item.location}</p>
      <p className={css.transmission}>{item.transmission}</p>
    </div>
  );
}