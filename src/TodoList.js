import { useState } from 'react';
import Todo from './components/Todo';

function TodoList({ todos, setTodos }) {
  const [todoCount, setTodoCount] = useState(5);

  const handleClick = () => {
    setTodoCount(todoCount + 5);
  };

  return(
    <div className="todo-container">
      <ul className="todo-list">
        {todos.slice(0, todoCount).map((todo) => (
          <Todo 
            key={todo.id} 
            title={todo.title} 
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <button onClick={handleClick}>Load More</button>
    </div>
  )
}

export default TodoList;