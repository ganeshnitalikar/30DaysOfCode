import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function InputForm() {
  const [task, setTask] = useState("");
  const { addTask } = useTaskContext();
  const submit = (e) => {
    e.preventDefault();
      if (addTask) {
          addTask({ taskName: task, status: false }, Date.now);
          } else {
            alert("addtaks not working")
          }
      console.log(task);
  };
  return (
    <form
      action=""
        className="flex justify-center items-center min-h-96"
    >
      <input
        className=" p-3 text-black border-black border rounded-3xl m-2 "
        type="text"
        placeholder="Enter Task Name"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button
        type="submit"
        className="bg-green-400 p-3 rounded-3xl border border-blue-400 hover:border-blue-950"
        onClick={(e) => submit(e)}
      >
        Add Task
      </button>
      </form>
  );
}

export default InputForm;
