import React from "react";
import { Form, useNavigate } from "react-router-dom";

export const ForgetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("login/forgetPassword");
  };

  return (
    <div>
      <Form>
        <input />
        <button type="Submit" onClick={handleSubmit}>
          Sent Code
        </button>
      </Form>
    </div>
  );
};
