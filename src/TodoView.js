import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import List from "./components/List";

const TodoView = ({
  match: {
    params: { id },
  },
}) => {
  const [todo, setTodo] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      setTodo(response.data);
    } catch (e) {
      console.warn("Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Link to="/">Back</Link>
      <List title={todo.title} userId={todo.userId} id={todo.id} />
    </div>
  );
};

export default TodoView;
