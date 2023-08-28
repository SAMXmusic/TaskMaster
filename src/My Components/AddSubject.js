import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const AddSubject = (props) => {
  const { topicId } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  console.log(topicId);
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be blank!");
    } else {
      props.addSubject(title, desc, topicId);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div
      className="container my-3 py-3"
      style={{
        border: " 4px dashed green",
        textAlign: "left",
        backgroundColor: "white",
      }}
    >
      <h3 className="text-center">
        Create New Topic <h6>(Subjects for School and College)</h6>
      </h3>

      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Add Topics / Subjects
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
        <button className="btn btn-secondary py-1"> Create</button>
      </form>
    </div>
  );
};
