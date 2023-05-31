import { createSlice } from "@reduxjs/toolkit";


export const fetchingSlice = createSlice({
    name: "showFetchingApp",
    initialState: {show: false},
    reducers: {
        setShowFetchingApp(state) {
            state.show = !state.show
        }
    }
})
export const { setShowFetchingApp } = fetchingSlice.actions

export default fetchingSlice.reducer;