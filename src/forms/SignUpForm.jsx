import React, { useState, useEffect } from 'react';
import "../styles/signup-form.css";
import pageIcon from "../images/headingIcon.svg";
import FormInput from "../components/FormInput"
import {getFormInputFieldsData }from "../utils/util";


const SignUpFrom = () => {
  const [content, setContent] = useState({});
  const [updateForm, setUpdateForm] = useState(false);

  const formInputFieldsData = getFormInputFieldsData(content, setContent);

  const handleSubmit = (event) => {
    if (content.hasErrors) {
      event.preventDefault();
      return false;
    }

    //TODO handler to commit changes with server
  };

  const isValid = key => (!!content[key]);

  const formHasErrors = () => formInputFieldsData.some(
    (input) => !isValid(input.key)
  );

  useEffect(() => {
    if (updateForm) {
      setContent({...content, hasErrors: formHasErrors()});
      setUpdateForm(false);
    }
  }, [content, updateForm]);

  return (
    <form
      className="form-wrapper"
      onSubmit={e => handleSubmit(e)}
    >
      <img className="form-heading-icon" src={pageIcon}/>
      <div className="form-heading-text">
        Tell us about yourself
      </div>
      <div className="form-content-wrapper">
        {formInputFieldsData.map(input => (
          <FormInput
            key={input.key}
            type={input.type}
            placeholder={input.placeholder}
            options={input.options}
            errorMsg={input.error}
            handleChange={input.onSet}
            hasError={!isValid(input.key) && content.hasErrors}
          />
        ))}
      </div>
      <button
        className="form-submit-button"
        type={"submit"}
        onClick={() => setUpdateForm(true)}
      >
        Sign-up
      </button>
    </form>
  );
};

export default SignUpFrom;
