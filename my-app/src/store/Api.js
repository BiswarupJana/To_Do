import React, { createContext, useContext, useEffect, useState } from "react";
const Apis = createContext();

export const ApiContext = ({ children }) => {
  const [allTasks, setAllTasks] = useState("");
  const [conpletedTask, setConpletedTask] = useState("");
  const [signupResponse, setSignupResponse] = useState("");
  const [loginResponse, setLoginResponse] = useState("");
  const [isLogedin, setIsLogedin] = useState(false);

  const getAllTasks = async () => {
    try {
      const response = await fetch("localhost: 5000/");
      const data = await response.json();
      setAllTasks(data);
    } catch (err) {
      console.error("Error fetching Tasks", err);
    }
  };

  const getCompletedTask = async () => {
    try {
      const response = await fetch("localhost");
      const data = await response.json();
      setConpletedTask(data);
    } catch (err) {
      console.err("Error fetching Completed Task", err);
    }
  };

  const getSignup = async (formData) => {
    try {
      let data = new FormData();
      data.append("name", formData.name);

      const response = await fetch("http://localhost:yourPort/yourEndpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      });

      if (response.ok) {
        const responseData = await response.json();
      } else {
        console.error("Sign Up Error", response.statusText);
      }
    } catch (err) {
      console.error("Sign Up Error", err);
    }
  };

  return (
    <Apis.Provider
      value={{
        allTasks,
        conpletedTask,
        isLogedin,
        setIsLogedin,
        getAllTasks,
        getCompletedTask,
      }}
    >
      {children}
    </Apis.Provider>
  );
};

export default ApiContext;

export const ApiState = () => {
  return useContext(Apis);
};
