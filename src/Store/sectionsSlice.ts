import { createSlice } from "@reduxjs/toolkit";

export const sectionsSlice = createSlice({
    name: "showGroupTask",
    initialState: {show: false},
    reducers: {
        setShowGroupTask(state) {
            state.show = !state.show
        }
    }
})

export const { setShowGroupTask } = sectionsSlice.actions
export default sectionsSlice.reducer;