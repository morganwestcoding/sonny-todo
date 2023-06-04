import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function TodoListSection() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [completed, setCompleted] = useState([]);

  const addTodo = () => {
    console.log(`this is the input ${input}`);
    setTodos([...todos, input]);
    setInput('');
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleCompleted = (index) => {
    const updatedCompleted = [...completed];
    if (updatedCompleted.includes(index)) {
      updatedCompleted.splice(updatedCompleted.indexOf(index), 1);
    } else {
      updatedCompleted.push(index);
    }
    setCompleted(updatedCompleted);
  };

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button type="submit" onClick={addTodo}>
          Add to List
        </button>
      </form>

      {todos.map((todo, index) => (
        <div key={index} className={`todo ${completed.includes(index) ? 'completed' : ''}`}>
          <p>
            <span className="task" onClick={() => toggleCompleted(index)}>
              {todo}
            </span>
            <span className="icons">
              <FontAwesomeIcon icon={faCheck} onClick={() => toggleCompleted(index)} />
              <span className="icon-spacing" />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeTodo(index)} />
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default TodoListSection;
