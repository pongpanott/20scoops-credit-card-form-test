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

  return (
    <div className="form-wrapper">
      <CreditCard values={values} isFocus={isFocus} />
      <form onSubmit={handleFormSubmit}>
        {/* card number */}
        <div className="form-row">
          <input
            className="form-input"
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
            style={{ visibility: errors.number ? "visible" : "hidden" }}
          >
            required
          </span>
        </div>
        {/* name */}
        <div className="form-row">
          <input
            className="form-input"
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
              className="half-form-input"
              type="text"
              name="expiry"
              value={values.expiry}
              onChange={(e) => handleChange(e)}
              maxLength={5}
              placeholder="Valud Thru"
              onFocus={() => setIsFocus({ ...isFocus, expiry: true })}
              onBlur={() => setIsFocus({ ...isFocus, expiry: false })}
            />
            <span
              className="half-error-text"
              style={{
                visibility:
                  errors.expiry || errors.expiryMonth ? "visible" : "hidden",
              }}
            >
              {errors.expiry ? " required" : "a month must be between 1 - 12"}
            </span>
          </div>
          <div>
            {/* cvc */}
            <input
              className="half-form-input"
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
              required
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

      <pre className="data-preview">
        <pre>{values ? JSON.stringify(values, null, 2) : {}}</pre>
        {/* {JSON.stringify({}, null, 2)} */}
      </pre>
    </div>
  );
}

export default App;
