import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo({text, todo, todos, setTodos}) {
  // events
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
    // console.log(todo);
  };

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }));
  }

  return(
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  )
}

export default Todo;