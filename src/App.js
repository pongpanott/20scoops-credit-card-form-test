import React, { useState } from "react";
import CreditCard from "./components/CreditCard";
import FormHandle from "./components/FormHandle";

function App() {
  const { handleChange, handleFormSubmit, values, errors, formReset } =
    FormHandle();

  const [isFocus, setIsFocus] = useState({
    number: false,
    name: false,
    expire: false,
    cvc: false,
  });

  const displayJson = () => {
    let displayValue = {};

    if (values.number) {
      displayValue.number = values.number;
    }
    if (values.name) {
      displayValue.name = values.name;
    }
    if (values.expiry) {
      displayValue.expiry = values.expiry;
    }
    if (values.cvc) {
      displayValue.cvc = values.cvc;
    }
    return JSON.stringify(displayValue, null, 2);
  };

  return (
    <div className="form-wrapper">
      <CreditCard values={values} isFocus={isFocus} />
      <form onSubmit={handleFormSubmit}>
        {/* card number */}
        <div className="form-row">
          <input
            className={errors.number ? "form-input-error" : "form-input"}
            type="text"
            name="number"
            value={values.number}
            onChange={(e) => handleChange(e)}
            maxLength={19}
            placeholder="Card Number"
            onFocus={() => setIsFocus({ ...isFocus, number: true })}
            onBlur={() => setIsFocus({ ...isFocus, number: false })}
          />
          <span
            className="error-text"
            style={{
              visibility: errors.number ? "visible" : "hidden",
            }}
          >
            card number must be 16-digits
          </span>
        </div>
        {/* name */}
        <div className="form-row">
          <input
            className={errors.name ? "form-input-error" : "form-input"}
            type="text"
            name="name"
            value={values.name}
            onChange={(e) => handleChange(e)}
            maxLengt={12}
            placeholder="Name"
            onFocus={() => setIsFocus({ ...isFocus, name: true })}
            onBlur={() => setIsFocus({ ...isFocus, name: false })}
          />
          <span
            className="error-text"
            style={{ visibility: errors.name ? "visible" : "hidden" }}
          >
            required
          </span>
        </div>
        {/* expire & cvc */}
        <div className="half-form-row">
          <div>
            {/* expire */}
            <input
              className={
                errors.expiry ? "half-form-input-error" : "half-form-input"
              }
              type="text"
              name="expiry"
              value={values.expiry}
              onChange={(e) => handleChange(e)}
              maxLength={5}
              placeholder="Valid Thru"
              onFocus={() => setIsFocus({ ...isFocus, expiry: true })}
              onBlur={() => setIsFocus({ ...isFocus, expiry: false })}
            />
            <span
              className="half-error-text"
              style={{
                visibility:
                  errors.expiry || errors.expiryMonth || errors.expiryYear
                    ? "visible"
                    : "hidden",
              }}
            >
              {errors.expiry
                ? "please input card expiry date in format MM/YY"
                : errors.expiryMonth
                ? "a month must be between 1 - 12"
                : "a year must not be last year"}
            </span>
          </div>
          <div>
            {/* cvc */}
            <input
              className={
                errors.cvc ? "half-form-input-error" : "half-form-input"
              }
              type="text"
              name="cvc"
              value={values.cvc}
              onChange={(e) => handleChange(e)}
              maxLength={3}
              placeholder="CVC"
              onFocus={() => setIsFocus({ ...isFocus, cvc: true })}
              onBlur={() => setIsFocus({ ...isFocus, cvc: false })}
            />
            <span
              className="half-error-text"
              style={{ visibility: errors.cvc ? "visible" : "hidden" }}
            >
              cvc must be 3-digit
            </span>
          </div>
        </div>

        <div className="button-wrapper">
          <button type="submit">Submit</button>
          <button type="reset" onClick={() => formReset()}>
            Reset
          </button>
        </div>
      </form>

      <div className="button-wrapper">
        <h2
          style={{
            color: "#222",
            margin: "18px auto",
          }}
        >
          Values
        </h2>
      </div>

      <pre className="data-preview">{displayJson()}</pre>
    </div>
  );
}

export default App;
