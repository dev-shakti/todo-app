
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TodoEditModal from "./TodoEditModal";
import { editTodo, deleteTodo, toggleTodo } from "../todoSlice";

// TodoItem component to display and manage an individual todo
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch() // Get the dispatch function from the Redux store
  const [showModal, setShowModal] = useState(false) // Local state to manage the modal visibility
  
  // Function to close the modal
  const handleClose = () => setShowModal(false)
    // Function to show the modal
  const handleShow = () => setShowModal(true)

  // Function to handle saving the edited todo
  const handleSave = (id, text) => {
    dispatch(editTodo({ id, text })) // Dispatch the editTodo action
    handleClose() // Close the modal
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <label
            className="form-check-label"
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </label>
        </div>
        <div>
          <button className="btn btn-warning btn-sm me-2" onClick={handleShow}>
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      </li>
      <TodoEditModal
        show={showModal}
        handleClose={handleClose}
        todo={todo}
        handleSave={handleSave}
      />
    </>
  );
};

export default TodoItem;
