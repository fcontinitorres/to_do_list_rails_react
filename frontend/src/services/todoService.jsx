
import { API_URL } from "../../src/constants";

async function fetchAllTodos(){
    const responseAPI = await fetch(`${API_URL}.json`);
    if (!responseAPI.ok) {
        throw new Error(responseAPI.statusText);
    }
    const json = await responseAPI.json();
    return json;
}

async function showTodoService(id){
    const responseAPI = await fetch(`${API_URL}/${id}.json`);
    if (!responseAPI.ok) {
        throw new Error(responseAPI.statusText);
    }
    const json = await responseAPI.json();
    return json;
}

async function newTodoService(name, completed) {
    const responseAPI = await fetch(`${API_URL}.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ todo: { name, completed } })
    });

    if (!responseAPI.ok) {
        throw new Error(responseAPI.statusText);
    }
    return responseAPI.json();
}

async function refactoryDeleteTodo(id) {
    const responseAPI = await fetch(`${API_URL}/${id}.json`, {
        method: "DELETE",
    });

    if (!responseAPI.ok) {
        throw new Error(responseAPI.statusText);
    }
}

async function updateTodoService(id, editedTodo) {
    const responseAPI = await fetch(`${API_URL}/${id}/update_completed.json`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedTodo)
    });

    if (!responseAPI.ok) {
        throw new Error(responseAPI.statusText);
    }
    return responseAPI.json();
}

export { fetchAllTodos, showTodoService, newTodoService, refactoryDeleteTodo, updateTodoService };