// Componente responsavel por mostrar a lista de to_do em looping

// API_URL comes from .env.development file
import React, {useState, useEffect} from "react";
import { API_URL } from "../../src/constants";

function TodosList() {
    // todos is the state variable that will hold the list of to_do items, starting empty
    // setTodos is the function that we will use to update the todos state
    const [todos_list, setTodos] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    // Fetch to_do from the API
    useEffect(() => {
        async function loadTodos(){
            const responseAPI = await fetch(`${API_URL}.json`);
            const json = await responseAPI.json();
            setTodos(json);
        }
        
        loadTodos();
    }, []);

    return (
        <>
        <div>
            { todos_list.map(todo => (
                <div key={todo.id} className="todos-container">
                    <h2>{todo.name}</h2>
                    <p>{todo.completed ? "Completed" : "Not completed"}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default TodosList;
