import { createSlice } from "@reduxjs/toolkit";

export const monsterdbSlice = createSlice({
    name: "showMonster",
    initialState: {show: false},
    reducers: {
        setShowMonsterdb(state) {
            state.show = !state.show
        },
        resetMonsterdb(state) {
            state.show = false
        }
    }
})



export const { setShowMonsterdb, resetMonsterdb } = monsterdbSlice.actions

export default monsterdbSlice.reducer;