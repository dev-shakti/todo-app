import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    // Add the todos slice reducer to the store
    todos: todoReducer,
  },
});
