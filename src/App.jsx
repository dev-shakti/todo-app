import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="my-4 text-center">Todo App</h1>
      <TodoInput />
      <TodoList/>
    </div>
  );
}

export default App;
