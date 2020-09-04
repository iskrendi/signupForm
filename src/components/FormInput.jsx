import React, { useState } from "react";
import Select, { components } from 'react-select';

import "../styles/signup-form.css";
import { colors } from "../utils/colors";
import dropdownIcon from "../images/dropdownIcon.svg";


const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <img src={dropdownIcon} alt=">"/>
  </components.DropdownIndicator>
);
const IndicatorSeparator = () => null;

const dropdownStyles = {
  control: (_, state) => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    border: "0",
    borderBottom: `1px solid ${state.isFocused ? colors.PURPLE : colors.LIGHT_BLUE}`,
    fontSize: "12px",
    lineHeight: "14px",
    marginBottom: "5px",
    height: "29px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    width: "50%",
    marginLeft: "50%",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: (state.isSelected || state.isFocused) && colors.GREY_BLUE,
    color: colors.BLACK,
    ':active': {
      backgroundColor: colors.GREY_BLUE,
    }
  }),
  placeholder: () => ({
    color: colors.GREEN_BLUE,
  })
};

const FormInput = props => {
  const {type, placeholder, options, errorMsg, handleChange, hasError } = props;
  const [onFocus, setOnFocus] = useState(false);

  const textLineClass = onFocus
    ? "input-text-line-active"
    : "input-text-line-inactive";

  const selectInput = () => (
    <React.Fragment>
      <Select
        styles={dropdownStyles}
        placeholder={placeholder}
        options={options}
        onChange={e => handleChange(e.value)}
        components={{DropdownIndicator, IndicatorSeparator}}
        required
      />
      <input
        type="hidden"
        required
        onChange={e => handleChange(e.target.value)}
      />
      <div className="form-input-text-error">{hasError && errorMsg}</div>
    </React.Fragment>
  );

  const textInput = () => (
    <React.Fragment>
      <input
        type={type}
        className="form-input-text"
        placeholder={placeholder}
        onChange={e => handleChange(e.target.value)}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        required
      />
      <div className={textLineClass}/>
      <div className="form-input-text-error">{hasError && errorMsg}</div>
    </React.Fragment>
  );

  const checkboxInput = () => (
    <label className="form-checkbox">
      <input
        type={type}
        onChange={e => handleChange(e.target.checked)}
        required
      />
      <span className="form-footer-text-wrapper">
            <span className="form-footer-text">I accept to the&nbsp;</span>
            <a
              href={"https://www.simplr.ai/terms-of-service"}
              className="form-footer-text"
            >
              Terms of Service
            </a>
          </span>
    </label>
  );

  switch(type.toString()) {
    case "checkbox":
      return checkboxInput();
    case "select":
      return selectInput();
    case "text":
    case "password":
    case "email":
      return textInput();
    default:
      return null;
  }
};

export default FormInput;
