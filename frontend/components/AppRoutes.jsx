// Componente responsavel por mostrar as rotas da aplicacao.

import React from "react";
import { Routes, Route } from "react-router-dom";

import TodosList from "../features/todos/TodosList";
import ShowTodo from "../features/todos/ShowTodo";
import NewTodoForm from "../features/todos/NewTodoForm";
import EditTodoForm from "../features/todos/EditTodoForm";

function AppRoutes(){
    return ( 
        <Routes>
            <Route path="/" element={<TodosList />} />
            <Route path="/todos/:id" element={<ShowTodo />} />
            <Route path="todos/new" element={<NewTodoForm />} />
            <Route path="todos/:id/edit" element={<EditTodoForm />} />
        </Routes>
    );
};

export default AppRoutes;