import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
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
    </div>
  );
}

export default App;
