import React from "react"
import classes from "./Fetching.module.css"

const Fetching = () => {
    return (
        <div className={classes.container}>
            <img src={props.screenShot} className={classes.image} alt="Screenshot showing landing page of app" />
            <section className={classes.description}>
                <p className={classes.paragraph}>{props.description}</p>
                <a className={classes.link} href={props.liveDemo} target="blank">Live Demo</a>
                <a className={classes.link} href={props.gitHub} target="blank">Github page</a>
            </section>
        </div>
    )
}
export default Fetching;