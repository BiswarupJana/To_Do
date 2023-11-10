import React from "react";

export const CompletedTask = () => {
  const data = [
    { name: "task 1", description: " First task Completed" },
    { name: "task 2", description: " Second task Completed" },
    { name: "task 3", description: " Third task Completed" },
    { name: "task 4", description: " Forth task Completed" },
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
