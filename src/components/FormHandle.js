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

    if (name === "number") {
      let cardNumber = value.replace(/^\D/g, "");
      let cardNumberGroup = cardNumber.match(/\d{1,4}/g);
      if (cardNumberGroup) {
        cardNumber = cardNumberGroup.join(" ");
      }
      setValues({ ...values, number: cardNumber });
    }
    if (name === "name") {
      setValues({ ...values, name: value });
    }
    if (name === "expiry") {
      let expireDate = value.replace(/^\D/g, "");
      let expireDateGroup = expireDate.match(/\d{1,2}/g);
      if (expireDateGroup) {
        expireDate = expireDateGroup.join("/");
      }
      setValues({ ...values, expiry: expireDate });
    }
    if (name === "cvc") {
      setValues({
        ...values,
        cvc: value.replace(/^\D/g, ""),
      });
    }

    validateForm({ [name]: value });
  };

  const validateForm = (fieldValue = values) => {
    let temp = { ...errors };

    if ("number" in fieldValue) {
      temp.number = !fieldValue.number || fieldValue.number.length < 19;
    }
    if ("name" in fieldValue) {
      temp.name = !fieldValue.name;
    }
    if ("expiry" in fieldValue) {
      temp.expiry = !fieldValue.expiry || fieldValue.expiry.length < 5;
    }
    if ("expiry" in fieldValue && fieldValue.expiry.length > 2) {
      let getTwoDigit = fieldValue.expiry.substring(0, 2);
      if (getTwoDigit > 12) {
        temp.expiryMonth = true;
      } else {
        temp.expiryMonth = false;
      }
    }
    if ("expiry" in fieldValue && fieldValue.expiry.length === 5) {
      let getLastTwoDigit = fieldValue.expiry.substring(3, 6);
      let thisYear = new Date().getFullYear().toString().substring(2, 4);

      if (getLastTwoDigit < thisYear) {
        temp.expiryYear = true;
      } else {
        temp.expiryYear = false;
      }
    }
    if ("cvc" in fieldValue) {
      temp.cvc = !fieldValue.cvc || fieldValue.cvc.length < 3;
    }

    setErrors({ ...temp });

    if (fieldValue === values) {
      return Object.values(temp).every((x) => x === false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(JSON.stringify(values, null, 2));
      setValues({ number: "", name: "", expiry: "", cvc: "" });
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
