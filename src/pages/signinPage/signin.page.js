import React, { useContext, useState } from "react";
import FormInput from "../../components/FormInput";
import "./signin.css";
import { MyContext } from "../../contextApi/myContext";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const {state, setState} = useContext(MyContext);
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormState((formState) => ({ ... formState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(
      state.email === formState.email && 
      state.password === formState.password
    ) {
      navigate("/")
        } else {
      alert("Invalid email or password!")
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-7 col_background" />
        <div className="col-md-5">
          <div className="mx-5 px-5 pt-5">
            <div className="my-5">
              <h1>Welcome!</h1>
              <small>Please sign into your account</small>
            </div>
            <form onSubmit={handleSubmit}>
              <FormInput
                name="email"
                type="email"
                value={formState.email}
                onChange={handleOnChange}
                label="Email Address"
              />
              <FormInput
                name="password"
                type="password"
                value={formState.password}
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
