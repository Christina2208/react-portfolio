import { useState } from "react";
import styles from "./contact.module.css";
import Validation from "../components/validation";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  function handleInput(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleValidation(e) {
    e.preventDefault();

    setErrors(Validation(values));
    e.target.reset();
  }

  return (
    <form onSubmit={handleValidation} className={styles.formBox} method="post">
      <span>Contact Me</span>
      <input
        type="text"
        name="name"
        onChange={handleInput}
        placeholder="Your name here"
        required
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      <input
        type="email"
        name="email"
        onChange={handleInput}
        placeholder="Your email address"
        required
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <textarea
        name="message"
        type="message"
        cols="30"
        rows="10"
        placeholder="Your message here..."
        onChange={handleInput}
        required
      />
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      <button type="submit" className={styles.formBtn}>
        Submit
      </button>
    </form>
  );
}