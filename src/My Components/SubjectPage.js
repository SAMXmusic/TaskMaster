import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dexie from 'dexie';

export const SubjectPage = () => {
  const { subjectId } = useParams(); // Get the subjectId from the URL parameter
  const [subject, setSubject] = useState(null); // State to hold the subject information
  const db = new Dexie('TaskMasterDatabase');
  db.version(1).stores({
    subjects: '++numb,title,desc',
    // ... Define other tables as needed
  });

  useEffect(() => {
    // Fetch the subject information based on subjectId from Dexie
    db.subjects.where("numb").equals(parseInt(subjectId)).first()
      .then((subject) => {
        setSubject(subject);
      })
      .catch((error) => {
        console.error("Error fetching subject:", error);
      });
  }, [subjectId]); // Trigger the effect whenever subjectId changes

  if (!subject) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }

  return (
    <div className="container">
      <h2>{subject.title}</h2>
      <p>{subject.desc}</p>
      {/* Display subject-specific content here */}
      febefjkwebfwbfWB
    </div>
  );
};
