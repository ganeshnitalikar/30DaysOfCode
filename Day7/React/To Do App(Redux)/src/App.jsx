import React from 'react'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1>To Do App Using Redux</h1>
      <div>
        <AddTodo />
        <Todo />
      </div>
    </div>
  )
}

export default App