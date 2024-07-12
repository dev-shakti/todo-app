
import { createSlice } from "@reduxjs/toolkit";

// Initial state is loaded from localStorage if available, otherwise it's an empty array
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

// Create a slice for todos with reducers to handle different actions
export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    // Reducer to add a new todo
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
      saveToLocalStorage(state);
    },
    // Reducer to toggle the completion status of a todo
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveToLocalStorage(state);
      }
    },
     // Reducer to delete a todo
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
     // Reducer to edit a todo
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        saveToLocalStorage(state);
      }
    },
  },
});

//Reusable function to save todos to localstorage
const saveToLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state));
};

// Export actions generated by createSlice
export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;

// Export the reducer to be used in the store
export default todoSlice.reducer;

