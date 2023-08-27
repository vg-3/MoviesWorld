import React from "react";
import classes from "./Header.module.css";
import TheaterComedyRoundedIcon from "@mui/icons-material/TheaterComedyRounded";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.title}>
          <TheaterComedyRoundedIcon fontSize="large"></TheaterComedyRoundedIcon>
          <h1>Movies World</h1>
        </div>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/directors">Directors</NavLink>
            </li>
            <li>
              <NavLink to="/actors">Actors</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
