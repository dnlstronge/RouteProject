import { createSlice } from "@reduxjs/toolkit";

export const ucCalcSlice = createSlice({
    name: "showUcCalc",
    initialState: {show: false},
    reducers: {
        setShowUCcalc(state) {
            state.show = !state.show
        },
        resetUCcalc(state) {
            state.show = false
        }
    }
})



export const { setShowUCcalc, resetUCcalc } = ucCalcSlice.actions

export default ucCalcSlice.reducer;