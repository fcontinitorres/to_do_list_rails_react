// API_URL comes from .env.development file
import React, {useState, useEffect} from "react";
import { API_URL } from "../../src/constants";

function TodosList() {
    // todos is the state variable that will hold the list of to_do items
    // setTodos is the function that we will use to update the todos state
    const [todos, setTodos] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    // Fetch to_do from the API
    useEffect(() => {
        async function loadTodos(){
            const response = await fetch(`${API_URL}.json`);
            const json = await response.json();
            setTodos(json);
        }
        
        loadTodos();
    }, []);

    return (
        <>
        <div>
            { todos.map(todo => (
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

        // async function loadTodos(){
        //     const response = await fetch(API_URL)
        //     const json = await response.json()
        //     setTodos(json)
        // }
        // loadTodos();

        //     const url = API_URL.endsWith(".json") ? API_URL : `${API_URL}.json`;
        //     const response = await fetch(url, {
        //         headers: {
        //             Accept: "application/json",
        //         },
        //     });

        //     if (!response.ok) {
        //         throw new Error(`Failed to load todos: ${response.status} ${response.statusText}`);
        //     }

        //     const json = await response.json();
        //     setTodos(json);
        //     setLoading(false);
        // }

        // loadTodos().catch(error => {
        //     setError(error);
        //     setLoading(false);
        // });