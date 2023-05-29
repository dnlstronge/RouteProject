import React from "react";

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
        <button ></button>
    )
}

export default NavBtn;