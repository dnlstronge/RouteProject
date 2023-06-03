import React, {useState} from "react";
import classes from "./WelfareCalcs.module.css"


/* REDUX actions and resets */
import { useDispatch } from "react-redux";
import { resetFetchingApp } from "../../../Store/fetchingSlice";
import { resetGroupTask } from "../../../Store/sectionsSlice";
import { resetMoneyMan } from "../../../Store/moneyManSlice";
import { resetUCcalc, setShowUCcalc } from "../../../Store/ucCalcSlice";
import { resetPCcalc, setShowPCcalc } from "../../../Store/pcCalcSlice";



//  - handle state locally for styling- 

const WelfareCalcs = () => {
    
    const [showCalcs, setShowCalcs] = useState(false)
    const [ucActive, setUcActive] = useState(false)
    const [pcActive, setPcActive] = useState(false)
    const dispatch = useDispatch()


    /* Handlers  */
    const handleDropDown = () => {
        setUcActive(false)
        setPcActive(false)
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
        dispatch(resetPCcalc)
        setPcActive(false)
        setUcActive(true)
        dispatch(setShowUCcalc())
    }
    const handlePCActive = () => {
        dispatch(resetFetchingApp())
        dispatch(resetGroupTask())
        dispatch(resetMoneyMan())
        dispatch(resetUCcalc())
        setUcActive(false)
        setPcActive(true)
        dispatch(setShowPCcalc())
    }

    /* dynamic styles */
    const ucActiveStyle = ucActive ? classes.subtitleActive : classes.subtitle
    const pcActiveStyle = pcActive ? classes.subtitleActive : classes.subtitle

    return (
        <div className={classes.container}>
            <h4 onClick={handleDropDown} className={classes.title}>Welfare Calculators</h4>

            {showCalcs && 
            <>
                <h4 onClick={handleUCActive} className={ucActiveStyle}>Universal Credit</h4>
                <h4 onClick={handlePCActive} className={pcActiveStyle}>Pension Credit</h4>
                <h4 className={classes.subtitle}>Other</h4>
            </>}
        </div>

    )
}
export default WelfareCalcs;