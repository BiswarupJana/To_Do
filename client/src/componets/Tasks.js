import React, { useState } from "react";
import { ApiState } from "../store/Api";

export const Tasks = () => {
  const { allTasks, getAllTasks } = ApiState() || {};
  const data = [
    { name: "task 1", description: " First task" },
    { name: "task 2", description: " Second task" },
    { name: "task 3", description: " Third task" },
    { name: "task 4", description: " Forth task" },
  ];

  const task = useState([
    {
      name: "",
      description: "",
    },
  ]);

  const handleCompletedTask = (item) => {
    console.log("ok");
    console.log(item);
  };
  return (
    <>
      <div>
        {data.map((item) => (
          <>
            <li key={item.id}>
              <label>{item.name}</label>
              <p>{item.description}</p>
              <button onClick={() => handleCompletedTask(item)}> Done</button>
            </li>
          </>
        ))}
      </div>
    </>
  );
};
