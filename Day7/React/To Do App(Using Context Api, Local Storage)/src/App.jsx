import React, { useEffect, useState } from "react";
import { TaskContextProvider, useTaskContext } from "./context/TaskContext";
import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => { 
    setTasks((prev) => [...prev, { id : Date.now(), ...task }]);
  };
  const updateTask = (task, id) => {
    setTasks((prev) => 
      prev.map(
        (prevTask) => prevTask.id === id ? task : prev
      )  
    )
  };
  const removeTask = (id) => {
    setTasks((prev) => prev.filter(
      (task) => task.id !== id 
    ))
  }
  const toggleTaskStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };


  useEffect(() => {
    const taskArray = JSON.parse(localStorage.getItem("tasks"));
    if(taskArray && taskArray.length > 0 )
    setTasks(taskArray);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  },[tasks]);

  return (
    <TaskContextProvider
      value={{ tasks, addTask, updateTask, removeTask, toggleTaskStatus }}
    >
      <InputForm></InputForm>
      <div className=" flex justify-center items-center bg-red-300 w-screen rounded-3xl flex-col p-5 myClass">
        {
          tasks.map( 
            (task) => (
              <TaskList key={task.id} task={task} />
            )
          )
        }
      </div>
    </TaskContextProvider>
  );
}

export default App;
