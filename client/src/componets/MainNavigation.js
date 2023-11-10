import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useAuth } from "../App";

export const MainNavigation = () => {
  const { isLogedin, setIsLogedin } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLogedin(false);
    navigate("/signup");
  };
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
          </ul>
        </nav>
        {isLogedin && <button onClick={handleLogout}> Log Out</button>}
        {!isLogedin && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Log In
          </NavLink>
        )}
      </div>
    </header>
  );
};
