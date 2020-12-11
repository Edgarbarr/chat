import React from "react";
import * as S from "./styles";

const Form = ({ children }) => {
  return <S.Form noValidate>{children}</S.Form>;
};
export default Form;
