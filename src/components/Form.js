import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

function Form({ inputText, setInputText, todos, setTodos }) {

  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(inputText) {
      setTodos([
        ...todos, 
        { text: inputText, completed: false, id: Math.random() * 100 }
      ]);
      setInputText("");
    }
  };

  return(
    <form>
      <input 
        value={inputText} 
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" 
        placeholder="Enter a task"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
    </form>
  )
}

export default Form;