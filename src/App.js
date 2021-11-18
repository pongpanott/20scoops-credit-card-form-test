import React, { useState } from "react";
import FormHandle from "./components/FormHandle";

function App() {
  const { handleChange, handleFormSubmit, values, errors } = FormHandle();

  console.log(`errors`, errors);

  return (
    <div
      style={{
        width: 550,
        margin: "10px auto 0 auto",
        boxShadow: "",
        border: "1px solid #CCCCCD",
        boxShadow: "2px 2px 5px rgb(0 0 0 / 30%)",
        padding: "10px",
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="cardNumber"
          onChange={handleChange}
          placeholder="Card Number"
        />
        {errors.cardNumber ? <span>required</span> : null}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
