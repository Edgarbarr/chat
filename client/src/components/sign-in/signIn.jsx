import React, { useReducer } from "react";
import Form from "../form";
import FormInput from "../form-input";
import axios from "axios";
import useForm from "../form/useForm";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();
  const handleSignIn = () =>
    axios.post("/user/login", { email, password }).then((response) => {
      console.log(response);
      setIsSubmitting(false);
      history.push("/dashboard");
    });
  const {
    handleChange,
    errors,
    isValidating,
    handleSubmit,
    formValues,
    isSubmitting,
    setIsSubmitting,
  } = useForm(handleSignIn, { email: 1, password: 1 });
  const { email, password } = formValues;
  return (
    <Form>
      <h2>Sign In</h2>
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
      <input
        className="submit-button"
        type="submit"
        onClick={handleSubmit}
        value={
          isSubmitting && !Object.keys(errors).length ? ". . ." : "Sign In"
        }
      ></input>
    </Form>
  );
};
export default SignIn;
