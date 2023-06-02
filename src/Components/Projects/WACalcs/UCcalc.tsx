import React from "react";
import classes from "./UCcalc.module.css"

const UCcalc: React.FC<projectDataTypeObject> = (props) => {
    return (
        <div className={classes.container}>
            {props.screenShots.map((image => {
                return (
                    <img key={image} src={image} className={classes.image} alt="Screenshot showing landing page of app" />
                )
            }))}
            <section className={classes.description}>
                <p className={classes.paragraph}>{props.description}</p>
                <a className={classes.link} href={props.liveDemo} target="blank">Live Demo</a>
                <a className={classes.link} href={props.gitHub} target="blank">Github page</a>
            </section>
            <section className={classes.iconsSection}>
                {props.icons.map((icon) => {
                    return (
                        icon
                    )
                })}
            </section>
        </div>
    )
}


export default UCcalc;