import { configureStore } from "@reduxjs/toolkit";
import sectionsSliceReducer from "./sectionsSlice";
import fetchingSliceReducer from "./fetchingSlice";

export const store = configureStore({
    reducer: {
        showGroupTask: sectionsSliceReducer,
        showFetchProject: fetchingSliceReducer,
    }
})

// types:

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch