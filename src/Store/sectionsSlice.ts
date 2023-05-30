import { createSlice } from "@reduxjs/toolkit";

export const sectionsSlice = createSlice({
    name: "showGroupTask",
    initialState: {show: false},
    reducers: {
        setShow(state) {
            state.show = !state.show
        }
    }
})