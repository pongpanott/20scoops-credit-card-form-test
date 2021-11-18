import { useState } from "react";

function FormHandle() {
  const [values, setValues] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(`name`, name);
    // console.log(`value`, value);
    if (name === "number") {
      setValues({
        ...values,
        number: value,
      });
    }
    if (name === "name") {
      setValues({ ...values, name: value });
    }
    if (name === "expiry") {
      setValues({ ...values, expiry: value });
    }
    if (name === "cvc") {
      setValues({ ...values, cvc: value.replace(/\D/g, "") });
    }
    validateForm({ [name]: value });
  };

  const validateForm = (fieldValue = values) => {
    let temp = { ...errors };

    if ("number" in fieldValue) {
      temp.number = !fieldValue.number;
    }
    if ("name" in fieldValue) {
      temp.name = !fieldValue.name;
    }
    if ("expiry" in fieldValue) {
      temp.expiry = !fieldValue.expiry;
    }
    if ("cvc" in fieldValue) {
      temp.cvc = !fieldValue.cvc;
    }

    setErrors({ ...temp });

    if (fieldValue === values) {
      console.log(`fieldValue`, fieldValue);
      console.log(`values`, values);
      return Object.values(temp).every((x) => x === "");
    }
  };

  const handleFormSubmit = (e) => {
    console.log("form submit");
    e.preventDefault();

    console.log(`errors`, errors);
    if (validateForm()) {
      alert("complete");
    }
  };

  const formReset = () => {
    setValues({ number: "", name: "", expiry: "", cvc: "" });
    setErrors({});
  };

  return {
    handleChange,
    handleFormSubmit,
    values,
    errors,
    formReset,
  };
}

export default FormHandle;
