import "./App.css";
import React from "react";
import TodoList from "./components/ToDoList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo</h1>
      </header>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
