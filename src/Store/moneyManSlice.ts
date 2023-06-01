import { createSlice } from "@reduxjs/toolkit";

export const sectionsSlice = createSlice({
    name: "showGroupTask",
    initialState: {show: false},
    reducers: {
        setShowGroupTask(state) {
            state.show = !state.show
        },
        resetGroupTask(state) {
            state.show = false
        }
    }
})



export const { setShowGroupTask, resetGroupTask } = sectionsSlice.actions

export default sectionsSlice.reducer;