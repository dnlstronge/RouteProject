import { createSlice } from "@reduxjs/toolkit";

export const fetchingSlice = createSlice({
    name: "showFetchingApp",
    initialState: {show: false},
    reducers: {
        setShowFetchingApp(state) {
            state.show = !state.show
        },
        resetFetchingApp(state) {
            state.show = false
        }
    }
})
export const { setShowFetchingApp, resetFetchingApp } = fetchingSlice.actions

export default fetchingSlice.reducer;