import React, { useReducer } from "react";
import Form from "../form";
import FormInput from "../form-input";
import { useHistory } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
    }
  );
  const onChangeHandler = (e) => {
    setFormValues({ [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");

    // axios
    //   .post("/user/login", { email, password })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => console.error(err));
  };
  let { email, password } = formValues;
  return (
    <Form>
      <h2>Sign In</h2>
      <FormInput
        type="email"
        label="email"
        id="email"
        value={email}
        onChange={onChangeHandler}
        required
      />
      <FormInput
        type="password"
        label="password"
        id="password"
        value={password}
        onChange={onChangeHandler}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title={
          "Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters"
        }
        required
      />
      <input
        className="submit-button"
        type="button"
        value={"Sign In"}
        onClick={handleSubmit}
      ></input>
    </Form>
  );
};
export default SignIn;
