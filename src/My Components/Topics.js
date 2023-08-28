import React, { useEffect, useState } from "react";
import { Topic } from "./Topic";
import Dexie from 'dexie';

const db = new Dexie('TaskMasterDatabase');
db.version(1).stores({
  topics: '++num,title,desc',
  // ... Define other tables as needed
});

export const Topics = (props) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    db.topics.toArray().then(savedTopics => {
      setTopics(savedTopics);
    });
  }, []);

  return (
    <div className="container my-3" style={{ minHeight: "70vh" }}>

      {props.topics.length === 0
        ? "No Workspaces to Display"
        : props.topics.map((topic) => {
            return (
              <Topic topic={topic} key={topic.num} onDelete={() => props.onDelete(topic)} /> // Use an arrow function to pass the topic object
            );
          })}
        </div>
  );
};
