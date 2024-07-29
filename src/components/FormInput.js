import React from "react";

function FormInput({ onChange, type = "text", name, label }) {
  return (
    <div className="form-group mb-4">
      <label for="exampleInputPassword1">{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="form-control"
        id="exampleInputPassword1"
      />
    </div>
  );
}

export default FormInput;
