import React, { useEffect, useState } from "react";
import useTodoService from "../service/useTodoService";
import "../styles/style.css";
import TodoItem from "./TodoItem";
function TodoList() {
  const { loading, todos } = useTodoService();
  const [allTodos, setAllTodos] = useState([]);
  useEffect(() => {
    setAllTodos(todos);
  }, [todos]);
  return (
    <div className={"todo-list"}>
      {loading && <div>{"loading"}</div>}
      <input
        onChange={e => {
          let newToods = todos.filter(x => x.name.includes(e.target.value));
          setAllTodos(newToods);
        }}
      ></input>
      <table>
        <tbody>
          <tr>
            <th>{"Name"}</th>
            <th>{"Status"}</th>
          </tr>
          {allTodos &&
            allTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo}></TodoItem>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
