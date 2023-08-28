import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const AddTodo = (props) => {
  const {subjectId} = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      props.addTodo(title, desc, subjectId);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3 py-3"
    style={{ border: " 4px dashed green", textAlign: "left", backgroundColor: "white" }}>
      
      <h3 className="text-center">
        Create New Topic <h6>(Subjects for School and College)</h6>
      </h3>
      
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Add Task
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Details Of Task
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-dark">
          Create
        </button>
      </form>
    </div>
  );
};