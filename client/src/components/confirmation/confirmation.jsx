import React from "react";
import * as S from "./styles";
import axios from "axios";
const Confirmation = ({ confirmAccount }) => {
  const closeOutHandler = (e) => {
    e.preventDefault();
    document
      .getElementById("confirmation")
      .style.setProperty("display", "none");
  };
  const resendConfirmation = () => {
    axios
      .post("/user/send-confirmation", confirmAccount)
      .then((response) => {})
      .catch((e) => {
        console.error(e);
      });
  };
  const propagationHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <S.Confirmation onClick={closeOutHandler} id="confirmation">
      <div onClick={propagationHandler}>
        <h1>Please check your email for a confirmation link</h1>
        <button onClick={closeOutHandler}>
          <img src="/icons/times-circle-solid.svg" />
        </button>
        <div
          className="resend-confirm submit-button"
          onClick={resendConfirmation}
        >
          Resend Confirmation Email
        </div>
      </div>
    </S.Confirmation>
  );
};
export default Confirmation;
