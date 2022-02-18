import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../assests/meals.jpg";

const Header = ({displayHandler}) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton displayHandler={displayHandler} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="ReactMeals Images" />
      </div>
    </React.Fragment>
  );
};

export default Header;
