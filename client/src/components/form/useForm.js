import { useReducer, useState, useEffect } from "react";
import validate from "./validate";
const useForm = (submit, activeValues) => {
  const [formValues, setFormValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidating, setValidation] = useState(false);

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  var debouncedSetErrors = debounce(
    () => setErrors(validate(formValues, activeValues)),
    250
  );
  useEffect(() => {
    if (isValidating) {
      debouncedSetErrors();
    }
  }, [formValues]);

  useEffect(() => {
    let noErrors = Object.keys(errors).length === 0;
    if (noErrors && isSubmitting) {
      submit().catch((err) => {
        let { type, message } = err.response?.data;
        setErrors({
          ...errors,
          [type]: message,
        });
        setIsSubmitting(false);
      });
    } else {
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!isValidating) setValidation(true);
    setErrors(validate(formValues, activeValues));
    setIsSubmitting(true);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ [id]: value });
  };
  const clearForm = () => {
    setFormValues({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return {
    handleChange,
    handleSubmit,
    clearForm,
    formValues,
    errors,
    isValidating,
    isSubmitting,
    setIsSubmitting,
  };
};
export default useForm;
