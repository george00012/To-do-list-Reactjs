import React, { useState } from "react";
import Formulario from "../components/form";
import Task from "../components/task";

function ToDoList() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task === "") {
      alert("Debes agregar una tarea");
      return;
    }

    const newTask = {
      id: Date.now(),
      task: task,
      completed: false,
    };

    const temp = [newTask, ...listTask];
    setListTask(temp);

    setTask("");

    console.log(listTask);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const handleSaveTask= (taskId, temp)=> {
    const updatedListTask=listTask.map((task)=>{
      if(task.id === taskId){
        return{...task, task: temp};
      }
      return task;
    })
    setListTask(updatedListTask);
  }

  const handleDeleteTask=(id)=>{
    const temp = listTask.filter(item => item.id !== id)
    setListTask(temp)
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="container-form">
        <Formulario
          task={task}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
      <div className="container-task">
        <h2>List Tasks</h2>
        <div className="container-info-task">
          {listTask &&
            listTask.map((task) => (
              <Task key={task.id} 
              id={task.id} 
              task={task} 
              onSave={handleSaveTask} 
              onDelete={handleDeleteTask}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
