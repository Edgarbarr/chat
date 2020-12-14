import React, { useState } from "react";
import Form from "../../components/form";
import FormInput from "../../components/form-input";
import useForm from "../../components/form/useForm";
import axios from "axios";
import * as S from "./styles";
import { useLocation, Redirect, Route } from "react-router-dom";

const ChangePassword = () => {
  let location = useLocation();
  const [changeSuccess, setChangeSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const handleSignUp = (e) =>
    axios
      .put(`/user${location.pathname}`, {
        email,
        password,
        username,
      })
      .then((response) => {
        setChangeSuccess(true);
        setTimeout(() => {
          setRedirect(true);
        }, 2000);
        setIsSubmitting(false);
      });
  const {
    handleChange,
    errors,
    isValidating,
    handleSubmit,
    formValues,
    isSubmitting,
    setIsSubmitting,
  } = useForm(handleSignUp, { password: 1, confirmPassword: 1 });

  const { email, password, confirmPassword, username } = formValues;
  return (
    <>
      {redirect ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <S.ChangePassword>
          <Form>
            <FormInput
              type="password"
              label="new password"
              id="password"
              value={password}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title={
                "Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters"
              }
              handleChange={handleChange}
              error={errors.password}
              isValidating={isValidating}
              required
            />
            <FormInput
              type="password"
              label="confirm new password"
              id="confirmPassword"
              title="Passwords must match"
              value={confirmPassword}
              handleChange={handleChange}
              error={errors.confirmPassword}
              isValidating={isValidating}
              required
            />
            <input
              type="submit"
              onClick={handleSubmit}
              value={
                isSubmitting && !Object.keys(errors).length
                  ? ". . ."
                  : "Change Password"
              }
            ></input>

            {changeSuccess ? <p>Password changed</p> : null}
          </Form>
        </S.ChangePassword>
      )}
    </>
  );
};
export default ChangePassword;
