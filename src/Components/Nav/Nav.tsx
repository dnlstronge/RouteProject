import React from "react";
import classes from "./Nav.module.css"
import NavBtn from "./NavBtn";


const Nav = () => {

  const testHandler = () => {
    console.log("test button function!!!")
  }


  return (
    <div className={classes.container}>
      <section className={classes.navButtons}>
        <NavBtn text="Test click" onClick={testHandler} />
      </section>
    </div>
  )
}

export default Nav;
