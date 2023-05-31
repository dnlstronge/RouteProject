import React, { useState } from "react"
import classes from "./Section.module.css"
import { useDispatch, useSelector } from "react-redux"
import { SectionDataModel } from "./SectionData"
import { projectDataTypeObject } from "../../../Models/projectDataTypes"
import { setShowGroupTask } from "../../../Store/sectionsSlice"
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"
import { RootState } from "../../../Store/store"

type sectionProps = {
    key: number,
    heading: string,
    subheadings: {
        name: string,
        dispatch: ActionCreatorWithoutPayload
    }[]
}


const Section: React.FC<sectionProps> = (props) => {
    const dispatch = useDispatch()
    const checkState = useSelector((state: RootState) => state.showGroupTask)
    const checkSecondState = useSelector((state: RootState) => state.showFetchProject )
    const [showDropDown, setShowDropDown] = useState(false)

    /* Handlers */
    const handleDropDown = () => {
        setShowDropDown(!showDropDown)
    }


    return (

        <div className={classes.container}>
            <h4 className={classes.title} onClick={handleDropDown}>{props.heading}</h4>
            {showDropDown &&
                <div className={classes.dropdown}>
                    {props.subheadings.map((item) => {
                        const handleDispatch = () => {
                            dispatch(item.dispatch())
                            //console.log("dispatch issued")
                            //console.log(item.dispatch)
                            console.log(checkState)
                            console.log(checkSecondState)
                        }
                        return <h4 className={classes.subtitle} onClick={handleDispatch} key={item.name}>{item.name}</h4>
                    })}
                </div>}
        </div>
    )
}

export default Section; 