import React, { useState } from "react";
import Form from "../../components/form";
import FormInput from "../../components/form-input";
import useForm from "../../components/form/useForm";
import axios from "axios";
import * as S from "./styles";
import { Redirect } from "react-router-dom";
const ChangePassword = () => {
  const [changeSuccess, setChangeSuccess] = useState(false);
  const handleSignUp = (e) => {
    console.log(email);
    return axios
      .post("/user/change-password", {
        email,
      })
      .then((response) => {
        setIsSubmitting(false);
        setChangeSuccess(true);
      });
  };
  const {
    handleChange,
    errors,
    isValidating,
    handleSubmit,
    formValues,
    isSubmitting,
    setIsSubmitting,
  } = useForm(handleSignUp, { email: 1 });

  const { email } = formValues;

  return (
    <S.ChangePassword>
      <Form>
        <FormInput
          type="email"
          label="email"
          id="email"
          value={email}
          handleChange={handleChange}
          error={errors.email}
          isValidating={isValidating}
          required
        />
        <input
          type="submit"
          onClick={handleSubmit}
          value={
            isSubmitting && !Object.keys(errors).length
              ? ". . ."
              : "Send Change Password Email"
          }
        ></input>
        {changeSuccess ? (
          <p>Please check your email for change password link</p>
        ) : null}
      </Form>
    </S.ChangePassword>
  );
};
export default ChangePassword;
