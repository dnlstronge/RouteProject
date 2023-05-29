import React from "react";
import classes from "./NavBtn.module.css"

/* CONFIG: 
props: text(button text) (String)
onClick: (points to function) ( => void)
*/

type navbtnProps = {
    text: string,
    onClick: () => void
}

const NavBtn: React.FC <navbtnProps> = (props) => {
    return (
        <button className={classes.btn} onClick={props.onClick}>{props.text}</button>
    )
}

export default NavBtn;