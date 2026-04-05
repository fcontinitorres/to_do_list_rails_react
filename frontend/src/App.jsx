import { useState } from 'react'
import './App.css'
import TodosList from '/features/todos/TodosList'

function App() {
  return (
    <>
    <div className="App">
      <h1>React Client - To Do List</h1>
      <p> Find this application layout in frontend/src/App.jsx</p>
      <TodosList />
    </div>
    
    </>
  )
}

export default App
