import React from "react";
import { Link } from "react-router-dom";
import Dexie from 'dexie';

const db = new Dexie('TaskMasterDatabase');
db.version(1).stores({
  subjects: '++numb,title,desc',

});

export const Subject = ({ onDelete, subject }) => {
  
  const handleDelete = () => {
    onDelete(subject);
    db.subjects.delete(subject.numb); // Remove subject from Dexie
  };

  return (
    <div>
      <div className="card my-3 py-2" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">{subject.title}</h5>
          <p className="card-text">{subject.desc}</p>
          <Link to={`/subjects/${subject.numb}/todos`}>
            <button className="btn btn-dark" style={{color: "#39f7CC"}}> Go to Tasks </button>
          </Link>
          <button
            className="btn btn-small"
            onClick={handleDelete}
            style={{color: "#FFA07A",float: "right"  }}
          >
            {" "}
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
