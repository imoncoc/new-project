import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // Add the middleware
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
