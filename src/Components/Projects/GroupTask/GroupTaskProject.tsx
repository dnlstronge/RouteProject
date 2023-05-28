import React from "react";
import classes from "./GroupTaskProject.module.css"
import { projectDataTypeObject } from "../../../Models/projectDataTypes";

const GroupTaskProject: React.FC<projectDataTypeObject> = (props) => {
    return (
        <div className={classes.container}>
            <img src={props.screenShot} className={classes.image} alt="Screenshot showing landing page of app" />
        </div>
    )
}

export default GroupTaskProject;