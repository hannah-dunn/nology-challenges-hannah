import React from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = ({ submit }) => {
  const formRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    submit(formData);
    formRef.current.

    formRef.current.reset();
  };
  return (
    <form className={styles.form} onSubmit={onSubmit} ref={formRef}>
      <div className={styles.field}>
        <label htmlFor="nameInput">Name</label>
        <input
          id="nameInput"
          type="text"
          name="name"
          placeholder="Your name here"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          type="text"
          name="email"
          placeholder="example@email.com"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="nameInput">Name</label>
        <input
          id="nameInput"
          type="text"
          name="name"
          placeholder="Your name here"
        />
      </div>
    </form>
  );
};

export default ContactForm;
