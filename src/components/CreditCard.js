import React from "react";
import chipSvg from "../assets/chip.svg";

function CreditCard(props) {
  const { values, isFocus } = props;

  return (
    <div
      className={
        isFocus.cvc ? "credit-card-wrapper flip-to-back" : "credit-card-wrapper"
      }
    >
      <div className="credit-card-inner">
        <div className="credit-card-front">
          <img src={chipSvg} alt="chip" className="chip" />
          <div className="card-number">**** **** **** ****</div>
          <div className="card-name">
            {values.name ? values.name : "your name here"}
          </div>
          <div className="card-expire">
            <div className="expire-text">valid thru</div>
            <div className="expire-value">** / **</div>
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
