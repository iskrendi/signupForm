import React, { useState, useEffect } from 'react';
import "../styles/signup-form.css";
import pageIcon from "../images/headingIcon.svg";
import FormInput from "../components/FormInput"


const ticketingSystems = [
  { label: "Zendesk", value: "zendesk" },
  { label: "Intercom", value: "intercom" },
  { label: "Gorgias", value: "gorgias" },
];

const SignUpFrom = () => {
  const [content, setContent] = useState({});
  const [updateForm, setUpdateForm] = useState(false);

  const formInputFieldsData = [
    { key: "name",
      type: "text",
      placeholder:"What is the name of your business?",
      options: {},
      error: "Business Name Required",
      onSet: (value => setContent({...content, name: value}))
    },
    { key: "website",
      type: "text",
      placeholder:"Business Website",
      options: {},
      error: "Business Website Required",
      onSet: (value => setContent({...content, website: value}))
    },
    { key: "ticketingSystem",
      type: "select",
      placeholder:"Select your ticketing system",
      options: ticketingSystems,
      error: "Ticketing System Required",
      onSet: (value => setContent({...content, ticketingSystem: value}))
    },
    { key: "email",
      type: "email",
      placeholder:"Your email",
      options: {},
      error: "Email Required",
      onSet: (value => setContent({...content, email: value}))
    },
    { key: "password",
      type: "password",
      placeholder:"Password",
      options: {},
      error: "Password Required",
      onSet: (value => setContent({...content, password: value}))
    },
    { key: "terms",
      type: "checkbox",
      placeholder:"Checkbox",
      options: {},
      error: "",
      onSet: (value => setContent({...content, terms: value}))
    },
  ];

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
            hasError={!isValid(input.key)}
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
