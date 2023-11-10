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
    confirm_password: "",
    phone: "",
    dob: "",
    address: "",
    current_location: "",
    last_company: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding property in formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Log the form data
    console.log("Form Data:", formData);

    // Redirect or perform any other actions
    if ((formData.password = formData.confirm_password)) {
      navigate("/");
    }
  };

  return (
    <>
      <div className={classes.signupPage}>
        <Form onSubmit={handleSubmit}>
          <div className={classes.signup_body}>
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
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
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
