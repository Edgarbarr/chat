export default (formValues, activeValues) => {
  const { email, password, confirmPassword, username } = formValues;
  let errors = {};
  if (activeValues.email) {
    if (!email.length) {
      errors.email = "Email is required.";
    } else if (!/[\w-]+@([\w-]+\.)+[\w-]+/.test(email)) {
      errors.email = "Email address is invalid.";
    }
  }
  if (activeValues.password) {
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 8 || password.length > 20) {
      errors.password = "Password needs to be between 8 and 20 characters.";
    } else {
      errors.password = "";
      if (!/^(?=.*\d)/.test(password)) {
        errors.password = " Missing a numeric digit.";
      }
      if (!/^(?=.*[a-z])/.test(password)) {
        errors.password += " Missing a lowercase letter.";
      }
      if (!/^(?=.*[A-Z])/.test(password)) {
        errors.password += " Missing an uppercase letter.";
      }
      if (!errors.password.includes("Missing")) {
        delete errors.password;
      }
    }
  }
  if (activeValues.username) {
    if (!username.length) {
      errors.username = "Username is required";
    } else if (!/^[a-zA-Z]+$/.test(username)) {
      errors.username = "Username must only container letters";
    } else if (username.length > 8) {
      errors.username = "Username must between 1 and 8 characters";
    }
  }
  if (activeValues.confirmPassword) {
    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match.";
    }
  }
  return errors;
};
