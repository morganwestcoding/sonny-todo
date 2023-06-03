import React, {useState} from 'react'
import "./App.css";

function TodoListSection() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState("");

  const addTodo =(e) => {
    e.preventDefault();
    console.log(`this is the input ${input}`);
    setTodos([...todos, input]);
    setInput("");
  }
  return (
    <div>
      <h1>Tomorrow's TODOs</h1>
      <form>
         <input value={input}
      onChange={(e) => setInput(e.target.value)} 
      type="text"></input>

      <button type="submit" onClick={addTodo}>Add to List</button>
      </form>

      <h2>List of Todos</h2>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  )
}

export default TodoListSection;
