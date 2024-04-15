import { configureStore } from "@reduxjs/toolkit";
import starshipReducer from "./starshipSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    starship: starshipReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
