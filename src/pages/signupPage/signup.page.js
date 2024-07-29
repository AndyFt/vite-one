import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../contextApi/myContext";

export default function Signup() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({});
  const {
    state: {},
    setState,
  } = React.useContext(MyContext);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ 
      ...prevState, [ name ]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-7 col_background" />
        <div className="col-md-5">
          <div className="mx-5 px-5 pt-5">
            <div className="my-5">
              <h1>Welcome!</h1>
              <small>Please sign up your account</small>
            </div>
            <form onSubmit={handleSubmit}>
              <FormInput 
                name="name"
                type="text"
                onChange={handleOnChange}
                label="Name"
              />
              <FormInput
                name="email"
                type="email"
                onChange={handleOnChange}
                label="Email Address"
              />
              <FormInput
                name="password"
                type="password"
                onChange={handleOnChange}
                label="Password"
              />
              <button type="submit" className="btn w-100  btn-warning">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
