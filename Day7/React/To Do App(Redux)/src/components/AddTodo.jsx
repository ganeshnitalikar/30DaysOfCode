import react, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/ToDo/todoSlice'
function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();


    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };
    return (
        <>
            <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
                <input
                    className="bg-gray-500 rounded border border-gray-700 focus:border-indigo-500 focus:ring2 focus:ring-indigo-900 textbase outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="text"
                    placeholder="Enter Task"
                    value={input}
                    onChange={
                        (e) => setInput(e.target.value)
                    } />
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Task</button>
            </form>
        </>
    );
}

export default AddTodo;