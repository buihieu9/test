import React from "react";
import "./style.scss";
function Input(props) {
  const { label, name, type, value, onChange, onBlur } = props;
  return (
    <div className="input">
      <input
        name={name}
        type={type}
        // value={value}
        onChange={onChange}
        placeholder={label}
        onBlur={onBlur}
      />
    </div>
  );
}

export default Input;
