import React from "react";
import { Routes, Route } from "react-router-dom";

import TodosList from "../features/todos/TodosList";
import ShowTodo from "../features/todos/ShowTodo";

function AppRoutes(){
    return ( 
        <Routes>
            <Route path="/" element={<TodosList />} />
            <Route path="/todos/:id" element={<ShowTodo />} />
            <Route path="/new" element={<h2>New To Do</h2>} />
        </Routes>
    );
};

export default AppRoutes;