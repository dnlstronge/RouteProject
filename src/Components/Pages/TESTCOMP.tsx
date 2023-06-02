import React from "react"
import TESTPROPS from "./TESTPROPS"
import BiLogoJavascript from "react-icons/bi"


const JS = <image />
const JS2 = BiLogoJavascript
const iconsArray = [JS, JS2]


const TESTCOMP = () => {
    return (
        <div>
            <TESTPROPS icons={iconsArray}/>
        </div>
    )
}

type propsToTest = {
    icons: string
}

export default TESTCOMP