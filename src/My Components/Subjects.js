import React, { useEffect, useState } from "react";
import { Subject } from "./Subject";
import Dexie from "dexie";
import { useParams } from "react-router-dom";

const db = new Dexie("TaskMasterDatabase");
db.version(1).stores({
  subjects: "++numb,topicid,title,desc",
});

export const Subjects = ({ onDelete, subjects }) => {
  const { topicId } = useParams();
  // useEffect(() => {
  //   db.subjects.toArray().then(savedSubjects => {
  //     setSubjects(savedSubjects);
  //   });
  // }, []);

  return (
    <div className="container my-3" style={{ minHeight: "70vh" }}>
      <h3 className="text-center"> Subjects </h3>

      {subjects.length === 0
        ? "No Subjects to Display"
        : subjects
            .filter((s) => s.topicid == topicId)
            .map((subject, id) => {
              return (
                <Subject
                  subject={subject}
                  key={id}
                  onDelete={() => onDelete(subject)}
                />
              );
            })}
    </div>
  );
};
