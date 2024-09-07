import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function TaskList({ task }) {
  const [isTaskEditable, setIsTaskEditable] = useState(false);
  const [taskMsg, setTaskMsg] = useState(task.taskName);
  const { removeTask, updateTask, toggleTaskStatus } = useTaskContext();

  const editTask = () => {
    updateTask(task.id, { ...task, taskName: taskMsg });
    setIsTaskEditable(false);
  };
  const toggle = () => {
    toggleTaskStatus(task.id);
  };

  return (
   
      <div
        className={`flex  border w-10/12 p-2  m-2 border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
          task.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={task.status}
          onChange={toggle}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTaskEditable ? "border-black/10 px-2" : "border-transparent"
          } ${task.status ? "line-through" : ""}`}
          value={taskMsg}
          onChange={(e) => setTaskMsg(e.target.value)}
          readOnly={!isTaskEditable}
        />
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (task.status) return;

            if (isTaskEditable) {
              editTask();
            } else setIsTaskEditable((prev) => !prev);
          }}
          disabled={task.status}
        >
          {isTaskEditable ? "📁" : "✏️"}
        </button>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => removeTask(task.id)}
        >
          ❌
        </button>
      </div>
  );
}

export default TaskList;
