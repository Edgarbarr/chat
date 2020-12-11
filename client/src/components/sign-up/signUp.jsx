import React, { useReducer } from "react";
import Form from "../form";
import FormInput from "../form-input";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );
  const handleChange = (e) => {
    setFormValues({ [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");

    // axios
    //   .post("/user/register", { username, email, password })
    //   .then((response) => {
    //     console.log(response);
    //     history.push("/dashboard");
    //   })
    //   .catch((err) => console.error(err));
  };

  const { username, email, password, confirmPassword } = formValues;
  return (
    <Form>
      <h2>Sign Up</h2>
      <FormInput
        type="username"
        label="username"
        id="username"
        value={username}
        handleChange={handleChange}
        required
      />
      <FormInput
        type="email"
        label="email"
        id="email"
        value={email}
        handleChange={handleChange}
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
        required
      />
      <FormInput
        type="password"
        label="confirm password"
        id="confirmPassword"
        title="Passwords must match"
        value={confirmPassword}
        handleChange={handleChange}
        required
      />
      <input
        className="submit-button"
        type="button"
        onClick={handleSubmit}
        value="Sign Up"
      ></input>
    </Form>
  );
};
export default SignUp;
