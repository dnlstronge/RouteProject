import React, { useState } from "react"
import classes from "./Section.module.css"
import { useDispatch } from "react-redux"


type propsForSection = {
    key: number,
    title: string,
    subheadings: {name: string, dispatch: dispatchAction}[]
}

/* config:

props: subheadings need a dispatch to fire in connected onclick
-----> make subheadings an configurable object

*/ 

const Section: React.FC<propsForSection> = (props) => {
    const dispatch = useDispatch()
    const [showDropDown, setShowDropDown] = useState(false)
    const handleDropDown = () => {
        setShowDropDown(!showDropDown)
    }
    console.log(props.subheadings)
    return (
        
        <div className={classes.container}>
            <h4 className={classes.title} onClick={handleDropDown}>{props.title}</h4>
            {showDropDown &&
                <div className={classes.dropdown}>
                 {props.subheadings.map((item) => {
                    const handleDispatch = () => {
                        let dispatchAction = item.dispatch
                        dispatch(dispatchAction)
                    }
                    return <h4 key={item.name}>{item.name}</h4>
                 })}
                </div>}
        </div>
    )
}

export default Section; 