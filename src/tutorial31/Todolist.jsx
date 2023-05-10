import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputVal.trim() !== "") {
      setTodos([...todos, inputVal]);
      setInputVal("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        
        <input type="text"value={inputVal} onChange={handleInputChange}  />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;