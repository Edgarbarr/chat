import React, { useState } from "react";
import Form from "../form";
import FormInput from "../form-input";
import axios from "axios";
import useForm from "../form/useForm";
import Confirmation from "../confirmation";
const SignUp = () => {
  const [confirmAccount, setConfirmAccount] = useState(null);

  const handleSignUp = () =>
    axios
      .post("/user/register", {
        username,
        email: email.toLowerCase(),
        password,
      })
      .then((response) => {
        setConfirmAccount(response.data);
        setIsSubmitting(false);
        document
          .getElementById("confirmation")
          .style.setProperty("display", "flex");
      });

  const {
    handleChange,
    errors,
    isValidating,
    handleSubmit,
    formValues,
    isSubmitting,
    setIsSubmitting,
  } = useForm(handleSignUp, {
    email: 1,
    password: 1,
    confirmPassword: 1,
    username: 1,
  });

  const { email, password, confirmPassword, username } = formValues;
  return (
    <Form>
      <h2>Sign Up</h2>
      <FormInput
        type="username"
        label="username"
        id="username"
        value={username}
        handleChange={handleChange}
        error={errors.username}
        isValidating={isValidating}
        required
      />
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
      <FormInput
        type="password"
        label="password"
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
        label="confirm password"
        id="confirmPassword"
        title="Passwords must match"
        value={confirmPassword}
        handleChange={handleChange}
        error={errors.confirmPassword}
        isValidating={isValidating}
        required
      />
      <input
        className="submit-button"
        type="submit"
        onClick={handleSubmit}
        value={
          isSubmitting && !Object.keys(errors).length ? ". . ." : "Sign Up"
        }
      ></input>
      <Confirmation confirmAccount={confirmAccount} />
    </Form>
  );
};
export default SignUp;
