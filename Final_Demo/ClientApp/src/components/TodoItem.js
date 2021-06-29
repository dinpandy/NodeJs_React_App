import React from "react";

function TodoItem(props) {
  const { todo } = props;
  return (
    <tr key={todo.id}>
      <td>{todo.name}</td>

      <td>{todo.status}</td>
    </tr>
  );
}
export default TodoItem;
