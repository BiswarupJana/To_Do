import React, { useState } from "react";
import { Form, useNavigate, Link, useActionData } from "react-router-dom";
import classes from "./SignupForm.module.css";

export const Signup = () => {
  const navigate = useNavigate();
  const data = useActionData();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    dob: "",
    role: "",
    address: "",
    current_location: "",
    last_company: "",
  });
  const [checkPassword, setCheckPassword] = useState("");
  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding property in formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Data:", formData);

    if (formData.password != formData.passwordConfirm) {
      setCheckPassword("Passwords are not same");
    } else {
      navigate("/login");
      setCheckPassword("");
    }
  };

  return (
    <>
      <div className={classes.signupPage}>
        <Form onSubmit={handleSubmit}>
          <div className={classes.signup_body}>
            <div>
              <h1>Sign Up</h1>
            </div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label> Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label>Confirm Password</label>
            {checkPassword && (
              <label style={{ color: "red" }}>{checkPassword}</label>
            )}
            <input
              type="password"
              name="confirm_password"
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
            <label>Phone No:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <label> DOB:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            <label> Role:</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
            <label> Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <label> Current Location</label>
            <input
              type="text"
              name="current_location"
              value={formData.current_location}
              onChange={handleChange}
            />
            <label>Last Company </label>
            <input
              type="text"
              name="last_company"
              value={formData.last_company}
              onChange={handleChange}
            />

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
