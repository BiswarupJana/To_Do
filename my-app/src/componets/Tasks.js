import React from "react";

export const Tasks = () => {
  const data = [
    { name: "task 1", description: " First task" },
    { name: "task 2", description: " Second task" },
    { name: "task 3", description: " Third task" },
    { name: "task 4", description: " Forth task" },
  ];
  return (
    <>
      <div>
        {data.map((item) => (
          <>
            <label>{item.name}</label>
            <p>{item.description}</p>
          </>
        ))}
      </div>
    </>
  );
};
