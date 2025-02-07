import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css"
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions.js";


const initialValues = {
    name: "",
    surname: "",
    number: "",
    message: "",
    level: "good"
}

export default function ContactForm() {
 const dispatch = useDispatch();
  const handleSubmit = (value, actions) => {
    // console.log("value", value);
dispatch(addContact(value));
       actions.resetForm();
     };
  const nameFieldId = useId();
  const surnameFieldId = useId();
  const numberFieldId = useId();
  const messageFieldId = useId();
  const optionFieldId = useId();
  

  return (
    <div className={css.container}>
      <h3>ContactForm</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor={nameFieldId} className={css.label}>
            name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.name}
          />
          <label htmlFor={surnameFieldId} className={css.label}>
            surname
          </label>
          <Field
            type="text"
            name="surname"
            id={surnameFieldId}
            className={css.surname}
          />
          <label htmlFor={numberFieldId} className={css.label}>
            number
          </label>
          <Field
            type="number"
            name="number"
            id={numberFieldId}
            className={css.number}
          />
          <label htmlFor={optionFieldId} className={css.label}>
            Options
          </label>
          <Field
            as="select"
            name="options"
            id={optionFieldId}
            className={css.number}
          >
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <label htmlFor={messageFieldId} className={css.label}>
            Message
          </label>
          <Field
            as="textarea"
            name="message"
            rows="5"
            id={messageFieldId}
            className={css.number}
          />
          <button type="submit" className={css.button}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}