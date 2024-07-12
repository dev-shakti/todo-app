import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlice";

const TodoInput = () => {
  
  // Local state to manage the input text
  const [text, setText] = useState("");

  // Get the dispatch function from the Redux store
  const dispatch=useDispatch()
  
   // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text)) // Dispatch the addTodo action with the input text
    setText('') // Clear the input field
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Add todo"
          required
          value={text}
          className="form-control"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
