import styles from "./Form.module.scss";
import { useState } from "react";

const ControlledForm = ({ handleSubmit }) => {
  const defaultValues = {
    fullname: "",
    email: "",
    job: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const [isValid, setIsValid] = useState(false);

  const validateForm = (data) => {
    if (data.fullname === "") {
      return false;
    }
    if (data.email === "") {
      return false;
    }
    if (data.job === "") {
      return false;
    }
    return true;
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    const newValues = { ...formValues, [name]: value };
    setFormValues(newValues);
    const isFormValid = validateForm(newValues);
    setIsValid(isFormValid);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formValues);
    setFormValues(defaultValues);
  };

  console.log("Form renders");

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label htmlFor="fullnameInput">Full name</label>
        <input
          type="text"
          name="fullname"
          id="fullnameInput"
          value={formValues.fullname}
          onChange={onInputChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="emailInput">Email</label>
        <input
          type="email"
          name="email"
          id="emailInput"
          value={formValues.email}
          onChange={onInputChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="passwordInput">Job Title</label>
        <input
          type="text"
          name="job"
          id="jobInput"
          value={formValues.job}
          onChange={onInputChange}
        />
      </div>
      <div className={styles.field}>
        <button disabled={!isValid}>Create</button>
      </div>
    </form>
  );
};

export default ControlledForm;
