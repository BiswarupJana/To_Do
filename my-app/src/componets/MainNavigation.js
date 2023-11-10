import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.navbar}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Log In
              </NavLink>
            </li>
          </ul>
        </nav>
        <button> Log Out</button>
      </div>
    </header>
  );
};
