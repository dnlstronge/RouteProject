import React from "react";
import classes from "./GroupTaskProject.module.css"
import { projectDataTypeObject } from "../../../Models/projectDataTypes"; // props type
import { Link } from "react-router-dom";

const GroupTaskProject: React.FC<projectDataTypeObject> = (props) => {
    return (
        <div className={classes.container}>
            <img src={props.screenShot} className={classes.image} alt="Screenshot showing landing page of app" />
            <section className={classes.description}>
                <Link className={classes.link} to={props.liveDemo} target="blank">Live Demo</Link>
                <Link className={classes.link} to={props.gitHub} target="blank">Github page</Link>
            </section>
        </div>
    )
}

export default GroupTaskProject;