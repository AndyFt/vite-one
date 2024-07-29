import React, { useContext } from "react";
import { MyContext } from "../contextApi/myContext";
import { useNavigate } from "react-router-dom";

export default function State() {

  const navigate = useNavigate();
  const { state, setState } = useContext(MyContext);

  const handleChange = event => {
    const { value, name } = event.target

    setState((prevState) => ({ ...prevState, [name]:value }))
  };

  const handleSubmit = event => {
    event.preventDefault()
    navigate('/')
  };

  return (
    <div className="container pt-5">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Username"
          onChange={handleChange} />
        <input
          name="email"
          placeholder="Email Address"
          onChange={handleChange} />
          <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange} />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}