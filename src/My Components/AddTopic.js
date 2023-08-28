import React, { useState } from "react";

export const AddTopic = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      props.addTopic(title, desc); // This function only updates the state
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div
      className="container my-3 py-3"
      style={{ border: " 4px dashed", textAlign: "left", backgroundColor: "white" }}
    >
      <h3 className="text-center">
        Create New WorkSpace{" "}
        <h6>
          (Your School, College or Job for example)
        </h6>
      </h3>

      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label mx-2">
            WorkSpace Name
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
          <label htmlFor="desc" className="form-label mx-2">
            Notes
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Create
        </button>
      </form>
    </div>
  );
};
