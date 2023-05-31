import React from "react";
import classes from "./GroupTaskProject.module.css"
import { projectDataTypeObject } from "../../../Models/projectDataTypes"; // props type
import { Link } from "react-router-dom";

const GroupTaskProject: React.FC<projectDataTypeObject> = (props) => {
    return (
        <div className={classes.container}>
            {props.screenShot.map((image => {
                return (
                    <img key={image} src={image} className={classes.image} alt="Screenshot showing landing page of app" />
                )
            }))}
            <section className={classes.description}>
                <p className={classes.paragraph}>{props.description}</p>
                <a className={classes.link} href={props.liveDemo} target="blank">Live Demo</a>
                <a className={classes.link} href={props.gitHub} target="blank">Github page</a>
            </section>
        </div>
    )
}

export default GroupTaskProject;