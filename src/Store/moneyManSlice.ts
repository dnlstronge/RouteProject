import { createSlice } from "@reduxjs/toolkit";

export const moneyManSlice = createSlice({
    name: "showMoneyMan",
    initialState: {show: false},
    reducers: {
        setShowMoneyMan(state) {
            state.show = !state.show
        },
        resetMoneyMan(state) {
            state.show = false
        }
    }
})



export const { setShowMoneyMan, resetMoneyMan } = moneyManSlice.actions

export default moneyManSlice.reducer;