// Componente responsavel por mostrar a lista de to_do em looping

// API_URL comes from .env.development file
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../src/constants";

function TodosList() {
    // todos is the state variable that will hold the list of to_do items, starting empty
    // setTodos is the function that we will use to update the todos state
    const [todos_list, setTodos] = useState([]);

    // Fetch to_do from the API
    useEffect(() => {
        async function loadTodos(){
            const responseAPI = await fetch(`${API_URL}.json`);
            const json = await responseAPI.json();
            setTodos(json);
        }
        
        loadTodos();
    }, []);

    async function deleteTodo(id) {
        try{
            const responseAPI = await fetch(`${API_URL}/${id}.json`, {
                method: "DELETE",
            });

            if (responseAPI.ok) {
                // Para DELETE, o Rails retorna 204 No Content, sem corpo JSON
                if (responseAPI.status === 204) {
                    // Atualiza a lista de to_do removendo o item deletado
                    setTodos(todos_list.filter(todo => todo.id !== id));
                } else {
                    // Caso retorne JSON (não é o caso padrão para DELETE)
                    const json = await responseAPI.json();
                    console.log(json);
                    setTodos(todos_list.filter(todo => todo.id !== id));
                }
            } else {
                throw responseAPI;
            }
        } catch (error) {
            alert("Error deleting To Do");
        }
    };

    return (
        <>
        <div>
            { todos_list.map(todo => (
                <div key={todo.id} className="todos-container">
                    <Link to={`/todos/${todo.id}`} className="todo-title">
                        <h2>{todo.name}</h2>
                    </Link>
                    <p>{todo.completed ? "Completed" : "Not completed"}</p>
                    <button className="delete-button" onClick={() => deleteTodo(todo.id)} >Delete </button>
                </div>
            ))}
        </div>
        </>
    )
}

export default TodosList;
