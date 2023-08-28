import React from "react";
import Dexie from "dexie";

const db = new Dexie("TaskMasterDatabase");
db.version(1).stores({
  todos: "++sno,title,desc",
  // ... Define other tables as needed
});

export const TodoItem = ({ todo, onDelete }) => {
  const handleDelete = () => {
    onDelete(todo);
    db.todos.delete(todo.sno); // Remove todo from Dexie
  };

  return (
    <div style={{width: "40%"}}>
      <ul style={{border: "2px solid black"}}>
        <li className="item p-3" >
          <h5>{todo.title}</h5>
          <p>{todo.desc}</p>
          <button className="btn btn-sm btn-success" onClick={handleDelete}>
            Done
          </button>
        </li>
      </ul>
    </div>
  );
};
