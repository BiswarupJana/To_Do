import React from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import classes from "./LoginForm.module.css";

export const LoginForm = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/");
  };
  return (
    <>
      <div className={classes.loginPage}>
        <Form>
          <div className={classes.formbody}>
            <label>Email</label>
            <input type="email" name="email" id="email" />
            <label>Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit" onClick={onSubmit}>
              {" "}
              Log In
            </button>
          </div>
        </Form>
        <p>
          {" "}
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </>
  );
};
