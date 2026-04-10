// Componente responsavel por mostrar detalhes do To_Do selecionado
import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { showTodoService } from "../../src/services/todoService";

function ShowTodo() {
    const [show_todo, setTodo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchCurrentTodo(){
            const data = await showTodoService(id)
            setTodo(data);
        };
        
        fetchCurrentTodo();
    }, [id]);

    if (!show_todo){
        return <h2>Loading...</h2>;
    };
    
    return (
        <div>
            <h2>{show_todo.name}</h2>
            <p>{show_todo.completed ? "Completed" : "Not completed"}</p>
            <Link to="/">Back to To Do List</Link>
        </div>
    );
};

export default ShowTodo;