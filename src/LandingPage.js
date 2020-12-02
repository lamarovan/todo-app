import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form';
import TodoList from './TodoList';

function LandingPage() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  // to fetch data from api
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      // console.log(response.data);
      setTodos(response.data);
    } catch (e) {
      console.warn("Error");
    }
  };
  
  // to load the data once
  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div className="container">
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
      />
      <hr />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  )

}

export default LandingPage;
