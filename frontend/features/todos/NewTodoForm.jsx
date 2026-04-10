// Componentes responsavel por mostrar o formulario de criacao de um novo to_do

import React, { useState } from "react";
import { API_URL } from "../../src/constants";
import { useNavigate } from "react-router-dom";
import { newTodoService } from "../../src/services/todoService";

function NewTodoForm() {
    const [name, setName] = useState("");
    const [completed, setCompleted] = useState(false);
    const navigate = useNavigate();
    
    //Parameters: {"authenticity_token" => "[FILTERED]", "todo" => {"name" => "Todo from Rails", "completed" => "1"}, "commit" => "Create Todo"}
    //Parameters: {"todo" => {"name" => "Todo from postman", "completed" => 0}}
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const data = await newTodoService(name, completed);
            if (data) {
                navigate(`/todos/${data.id}`);
            } else {
                alert("Error creating To Do");
        }
        } catch (error) {
            console.error("Erro criando Todo:", error);
            alert("Error creating To Do");
        }
    }

    return (
        <div>   
            <h2>New To Do Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nameInput">Name: </label>
                    <input id="nameInput" type="text" value={name} onChange={(e) => setName(e.target.value)} required ></input>
                </div>
                <div>
                    <label htmlFor="completedInput">Completed: </label>
                    <input id="completedInput" type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} ></input>
                </div>
                <div>
                    <button type="submit">Create To Do</button>
                </div>
            </form>
        </div>
    );
}

export default NewTodoForm;

// --- handleSubmit before refactor --- \\
// const responseAPI = await fetch(`${API_URL}.json`, {
// method: "POST",
// headers: {
//     "Content-Type": "application/json",
// },
// body: JSON.stringify({name, completed})
// });