import React from "react";
import { Tasks } from "./Tasks";
import { CompletedTask } from "./CompletedTask";
import classes from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div className={classes.home}>
        <h1>To Do List</h1>
        <div className={classes.task_body}>
          <div>
            <Tasks />
          </div>
          <div>
            <CompletedTask />
          </div>
        </div>
      </div>
    </>
  );
};
