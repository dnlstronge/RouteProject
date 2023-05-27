import React from "react";
import classes from "./App.module.css"
import SideNav from "./Components/SideNav/SideNav"


const App = () => {
  return (
    <div className={classes.container}>
      <SideNav />
    </div>
  )
};

export default App;
