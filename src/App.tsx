import React from "react";
import classes from "./App.module.css"
import SideNav from "./Components/SideNav/SideNav"
import Window from "./Components/Window/Window";
import { createBrowserRouter } from "react-router-dom";

createBrowserRouter([
  {},
  {}
])

const App = () => {
  return (
    <div className={classes.container}>
      <SideNav />
      <Window />
    </div>
  )
};

export default App;
