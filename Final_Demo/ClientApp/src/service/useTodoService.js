import { useEffect, useState } from "react";
function useTodoService() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let url = process.env.REACT_APP_TODO_API_URL;
    fetch(url)
      .then(data => data.json())
      .then(result => {
        setLoading(false);
        setTodos(result);
      })
      .catch(error => {
        console.log("error", error.message);
        setLoading(false);
        setTodos([]);
      });
  }, []);

  return {
    loading,
    todos
  };
}

export default useTodoService;
