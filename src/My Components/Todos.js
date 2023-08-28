import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Dexie from 'dexie';
import {TodoItem} from "./TodoItem"

const db = new Dexie('TaskMasterDatabase');
db.version(1).stores({
  subjects: '++numb,subjectId,title,desc',
  todos: '++sno,title,desc'
});

export const Todos = ({todos, onDelete}) => {
  const { subjectId } = useParams();

  return (
    <div className="container my-3" style={{ minHeight: "70vh", margin: "10px auto" }}>
      <h3 className='my3'>Tasks</h3>

      {todos.length === 0 ? "Congratulations! You have no pending Tasks" :
      todos.filter(t => t.subjectId == subjectId).map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete={() => onDelete(todo)} /> 
      })}
    </div>
  );
}