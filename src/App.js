import logo from "./logo.svg";
import "./App.css";
import Header from "./My Components/Header";
import { Footer } from "./My Components/Footer";

import { Home } from "./My Components/Home";
import { About } from "./My Components/About";

import { AddTopic } from "./My Components/AddTopic";
import { Topics } from "./My Components/Topics";

import { AddSubject } from "./My Components/AddSubject";
import { Subjects } from "./My Components/Subjects";

import { AddTodo } from "./My Components/AddTodo";
import { Todos } from "./My Components/Todos";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dexie from 'dexie';

function App() {
  const db = new Dexie('TaskMasterDatabase');
  db.version(1).stores({
    topics: '++num,title,desc',
    subjects: '++numb,title,desc',
    todos: '++sno,title,desc'

  });

  //Here begins the WorkSpace commands
  const addTopic = (title, desc) => {
    const num = topics.length === 0 ? 0 : topics[topics.length - 1].num + 1;
    const myTopic = {
      num: num,
      title: title,
      desc: desc,
    };
    setTopics([...topics, myTopic]);
    db.topics.add(myTopic); // Store in Dexie
  };


  const [topics, setTopics] = useState([]);

  useEffect(() => {
    db.topics.toArray().then(savedTopics => {
      setTopics(savedTopics);
    });
  }, []);

  const onDeleteTopic = (topic) => {
    setTopics(topics.filter(e => e !== topic));
    db.topics.delete(topic.num);
  };

   //Here begins the Subjects
   const addSubject = (title, desc, topicid) => {
    const numb = subjects.length === 0 ? 0 : subjects[subjects.length - 1].numb + 1;
    const mySubject = {
      numb: numb,
      title: title,
      desc: desc,
      topicid: topicid
    };
    setSubjects([...subjects, mySubject]);
    db.subjects.add(mySubject); // Store in Dexie
  };
   const [subjects, setSubjects] = useState([]);

   useEffect(() => {
     db.subjects.toArray().then(savedSubjects => {
       setSubjects(savedSubjects);
     });
   }, []);
 
   const onDeleteSubject = (subject) => {
     setSubjects(subjects.filter(e => e !== subject));
     db.subjects.delete(subject.numb);
   };

   //Here begins the Todo List Commands
   const addTodo = (title, desc, subjectid) => {
    const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      subjectId: subjectid
    };
    setTodos([...todos, myTodo]);
    db.todos.add(myTodo); // Store in Dexie
  };

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.todos.toArray().then(savedTodos => {
      setTodos(savedTodos);
    });
  }, []);

  const onDeleteTodo = (todo) => {
    setTodos(todos.filter(e => e !== todo));
    db.todos.delete(todo.sno);
  };
 
  return (
    <div>
      <BrowserRouter>
        <Header title="TaskMaster" />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact
            path="/addTopics"
            element={
              <div>
                <AddTopic addTopic={addTopic} />
                <Topics topics={topics} onDelete={onDeleteTopic} />
              </div>
            }
          ></Route>

          <Route exact 
            path="/topics/:topicId/subjects"
            element={
              <div>
                <AddSubject addSubject={addSubject} />
                <Subjects subjects={subjects} onDelete={onDeleteSubject} />
              </div>
            }
          ></Route>

          <Route exact
            path="/subjects/:subjectId/todos"
            element={
              <div>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDeleteTodo} />
              </div>
            }
          ></Route>

          <Route exact path="/attendance" element={<About/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;