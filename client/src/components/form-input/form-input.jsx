import React, { useState } from "react";
import * as S from "./styles";

const FormInput = ({
  handleChange,
  label,
  error,
  isValidating,
  type,
  ...otherProps
}) => {
  const [inputType, setInputType] = useState(type);

  const showPasswordHandler = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <S.FormInput type={inputType} error={error} isValidating={isValidating}>
      <div className="group">
        <input
          className="form-input"
          onChange={handleChange}
          {...otherProps}
          type={inputType}
        />
        {label ? (
          <label
            className={`${
              otherProps.value.length ? "shrink" : ""
            } form-input-label`}
          >
            {label}
          </label>
        ) : null}
        {type === "password" ? (
          <div className="show-password" onClick={showPasswordHandler}>
            <img
              src={
                inputType === "password"
                  ? "/icons/eye-solid.svg"
                  : "/icons/eye-slash-solid.svg"
              }
            />
          </div>
        ) : null}
      </div>
    </S.FormInput>
  );
};
export default FormInput;
