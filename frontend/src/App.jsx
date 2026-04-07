import { useState } from 'react'
import './App.css'
import AppRoutes from '../components/AppRoutes'
import NavBar from '../components/NavBar'

// React use to be a single page application, but we can use react-router-dom to make it a multi-page application
// We will use BrowserRouter as Router to wrap our component and use Link to navigate between pages
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <h1>React Client - To Do List</h1>
      <p> Find this application layout in frontend/src/App.jsx</p>
      <NavBar />
      <AppRoutes />
    </div>
    </Router>
  )
}

export default App

// import TodosList from '../features/todos/TodosList'
// <TodosList />