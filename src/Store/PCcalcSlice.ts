import { createSlice } from "@reduxjs/toolkit";

export const pcCalcSlice = createSlice({
    name: "showPcCalc",
    initialState: {show: false},
    reducers: {
        setShowPCcalc(state) {
            state.show = !state.show
        },
        resetPCcalc(state) {
            state.show = false
        }
    }
})



export const { setShowPCcalc, resetPCcalc } = pcCalcSlice.actions

export default pcCalcSlice.reducer;