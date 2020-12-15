import React, { useEffect, useContext, useState } from "react";
import Form from "../form";
import FormInput from "../form-input";
import axios from "axios";
import useForm from "../form/useForm";
import { useHistory } from "react-router-dom";
import UserContext from "../../UserContext";

const SignIn = ({ socket }) => {
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  // const [clientID, setClientID] = useState();

  const handleSignIn = () =>
    axios
      .post("/user/login", {
        email: email.toLowerCase(),
        password,
      })
      .then((response) => {
        const { data } = response;
        console.log("user log in");
        console.log(socket);
        setUser({
          username: data.username,
          isLoading: false,
          id: user.id,
          kelson: "kelson",
        });
        localStorage.setItem("user", JSON.stringify(data.token));
        setIsSubmitting(false);
        console.log(`this is socket ${socket}`);
        console.log(data);
        socket.emit("admin-user-join", data.username);
        history.push("/dashboard");
      });
  const forgotPasswordHandler = () => {
    history.push("/change-password");
  };
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
      <button className="forgotPassword" onClick={forgotPasswordHandler}>
        Forgot password?
      </button>
    </Form>
  );
};

export default SignIn;
