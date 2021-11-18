import { useState } from "react";

function FormHandle() {
  const [values, setValues] = useState({
    cardNumber: "",
    cardName: "",
    cardValid: "",
    cvc: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateForm = (values) => {
    let errors = {};

    // errors.cardNumber = false;

    if (!values.cardNumber) {
      errors.cardNumber = true;
    }

    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let errors = validateForm(values);
    console.log(`errors`, errors);
    setErrors(errors);
  };

  return { handleChange, handleFormSubmit, values, errors };
}

export default FormHandle;
