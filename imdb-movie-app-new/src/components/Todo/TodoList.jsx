import { useState } from "react";


const TodoList = () => {
  const [todos, setTodos] = useState([
    { todo: "milk" },
    { todo: "sugar" },
    { todo: "orange" },
    { todo: "pink" },
    { todo: "books" }
  ]);
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name === "") 
        return;
    setTodos([...todos, { todo: name }]);
    setName("");
  };
  


  const handleDelete = (deleteItem) => {
    const updated = todos.filter((item) => item.todo !== deleteItem);
    setTodos(updated);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">To-Do List</h2>

      
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add value"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-warning" onClick={handleAdd}>
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="list-group gap-4 mb-3">
        {todos.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center p-3 mb-2 rounded bg-light"
          >
            {item.todo}

            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(item.todo)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;



