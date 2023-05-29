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
        <NavBtn text="Projects" onClick={testHandler} />
        <NavBtn text="About" onClick={testHandler} />
        <NavBtn text="Contact" onClick={testHandler} />
      </section>
    </div>
  )
}

export default Nav;
