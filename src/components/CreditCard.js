import React from "react";
import chipSvg from "../assets/chip.svg";

function CreditCard(props) {
  const { values, isFocus } = props;

  const stringReplace = (data, defaultFormat) => {
    let inputLength = data.length;
    let replace = defaultFormat.substring(inputLength);
    let newExpire = data + replace;

    return newExpire;
  };

  const displayCardNumber = () => {
    let defaultCardNumber = "•••• •••• •••• ••••";
    if (values.number) {
      return stringReplace(values.number, defaultCardNumber);
    }
    return defaultCardNumber;
  };

  const displayValidThru = () => {
    let defaultExpire = "••/••";
    if (values.expiry) {
      return stringReplace(values.expiry, defaultExpire);
    }
    return defaultExpire;
  };

  return (
    <div
      className={`credit-card-wrapper ${isFocus.cvc ? "flip-to-back" : null} `}
    >
      <div className="credit-card-inner">
        <div className="credit-card-front">
          <img src={chipSvg} alt="chip" className="chip" />
          <div className="card-number">
            <span className={isFocus.number ? "card-text-focus" : "card-text"}>
              {displayCardNumber()}
            </span>
          </div>
          <div className="card-name">
            <span className={isFocus.name ? "card-text-focus" : "card-text"}>
              {values.name ? values.name : "your name here"}
            </span>
          </div>
          <div className="card-expire">
            <div
              className={`expire-text ${
                isFocus.expiry ? "card-text-focus" : "card-text"
              } `}
            >
              valid thru
            </div>
            <div
              className={`expire-text ${
                isFocus.expiry ? "card-text-focus" : "card-text"
              } `}
            >
              {displayValidThru()}
            </div>
          </div>
        </div>
        <div className="credit-card-back">
          <div className="card-strip" />
          <div className="card-sign-here" />
          <div className="card-cvc">{values.cvc}</div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
