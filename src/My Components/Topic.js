import React from "react";
import { Link } from "react-router-dom";
import Dexie from "dexie";
import "./Topic.css";

const db = new Dexie("TaskMasterDatabase");
db.version(1).stores({
  topics: "++num,title,desc",
  // ... Define other tables as needed
});

export const Topic = ({ topic, onDelete }) => {
  const handleDelete = () => {
    onDelete(topic);
    db.topics.delete(topic.num); // Remove topic from Dexie
  };

  return (
    <div style={{ width: "80%" }}>
      <div className="card m-4" style={{width:"80vw"}}>
        <div className="card-body">
          <h4 className="card-title">{topic.title}</h4>
          <p className="card-text">{topic.desc}</p>
          <Link to={`/topics/${topic.num}/subjects`}>
            <button className="btn btn-dark" style={{color: "#39f7CC", float: "left", }}>
              {" "}
              Go to Subjects{" "}
            </button>
          </Link>

          <button
            className="btn btn-small" style={{float:"right", color:"red"}}
            onClick={handleDelete}
            
          >
            {" "}
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
