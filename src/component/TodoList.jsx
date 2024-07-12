import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

// TodoList component to display the list of todos
const TodoList = () => {

 // Get the todos from the Redux store
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="list-group mb-3">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
