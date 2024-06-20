import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");
  const handleTodos = () => {
    if (input !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  const todoRemove = (index) => {
    const updatedTodo = todos.filter((_, i) => i !== index);
    setTodos(updatedTodo);
  };

  return (
    <div className="details">
      <h4>Add Text for Todo list</h4>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit" onClick={handleTodos}>
        Add
      </button>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {index + 1}.{todo}
            <MdDelete className="remove" onClick={() => todoRemove(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
