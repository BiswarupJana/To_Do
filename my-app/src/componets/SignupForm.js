import React from "react";
import { Form, useNavigate, Link } from "react-router-dom";
import classes from "./SignupForm.module.css";

export const Signup = ({ data, setData }) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    let value = event.target.value;
    setData((event.target.name = value));
  };
  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <div className={classes.signupPage}>
        <Form>
          <div className={classes.signup_body}>
            <label>Name:</label>
            <input type="text" name="name" id="name" />
            <label> Email</label>
            <input type="email" name="email" id="email" />
            <label>Password</label>
            <input type="password" name="password" />
            <label>Confirm Password</label>
            <input type="password" name="confirm_password" />
            <label>Phone No:</label>
            <input type="tel" id="phone" name="phone" />
            <label> DOB:</label>
            <input type="date" id="dob" name="dob" />
            <label> Address</label>
            <input type="text" name="Address" />
            <label> Current Location</label>
            <input type="text" name="current_location" />
            <label>Last Company </label>
            <input type="text" name="last_company" />

            <input type="submit" value="Sign In" onClick={handleSubmit} />
          </div>
        </Form>
        <p>
          {" "}
          Do you already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </>
  );
};
