import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">To Do List</Link>
            {" | "}
            <Link to="/new">Add To Do</Link>
        </nav>
    );
}

export default NavBar;