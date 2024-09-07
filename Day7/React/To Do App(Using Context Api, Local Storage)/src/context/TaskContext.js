import { createContext, useContext } from "react";

export const TaskContext = createContext({
    tasks: [
        { 
            id:  1,
            taskName: "Task Name",
            status: false,
        }

    ],
    addTask : (task , id) =>{ },
    removeTask: (id) => { },
    updateTask: (id, task) => { },
    toggleTaskStatus : (id) =>{}

});

export const useTaskContext = () => {
    return useContext(TaskContext);
}

export const TaskContextProvider = TaskContext.Provider;