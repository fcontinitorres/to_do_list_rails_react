// Componente responsavel por mostrar a barra de navegacao do app

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">To Do List</Link>
            {" | "}
            <Link to="todos/new">Add To Do</Link>
        </nav>
    );
}

export default NavBar;