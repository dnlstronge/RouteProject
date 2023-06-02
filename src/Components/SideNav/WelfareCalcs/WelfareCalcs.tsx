import React, {useState} from "react";
import classes from "./WelfareCalcs.module.css"
import { useDispatch } from "react-redux";
import { resetFetchingApp } from "../../../Store/fetchingSlice";
import { resetGroupTask } from "../../../Store/sectionsSlice";
import { resetMoneyMan } from "../../../Store/moneyManSlice";
import { resetUCcalc, setShowUCcalc } from "../../../Store/UCcalcSlice";



//  - handle state locally - 

const WelfareCalcs = () => {
    
    const [showCalcs, setShowCalcs] = useState(false)
    const [ucActive, setUcActive] = useState(false)
    const dispatch = useDispatch()


    /* Handlers  */
    const handleDropDown = () => {
        setUcActive(false)
        dispatch(resetFetchingApp())
        dispatch(resetGroupTask())
        dispatch(resetMoneyMan())
        dispatch(resetUCcalc())
        setShowCalcs(!showCalcs)
    }

    const handleUCActive = () => {
        dispatch(resetFetchingApp())
        dispatch(resetGroupTask())
        dispatch(resetMoneyMan())
        setUcActive(true)
        dispatch(setShowUCcalc())
    }


    /* dynamic styles */
    const ucActiveStyle = ucActive ? classes.subtitleActive : classes.subtitle
    return (
        <div className={classes.container}>
            <h4 onClick={handleDropDown} className={classes.title}>Welfare Calculators</h4>

            {showCalcs && 
            <>
                <h4 onClick={handleUCActive} className={ucActiveStyle}>Universal Credit</h4>
                <h4 className={classes.subtitle}>Pension Credit</h4>
                <h4 className={classes.subtitle}>Other</h4>
            </>}
        </div>

    )
}
export default WelfareCalcs;