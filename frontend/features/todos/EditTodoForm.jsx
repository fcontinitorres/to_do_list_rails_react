import {useState, useEffect} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../src/constants";

function EditTodoForm() {
    const [editTodo, setTodo] = useState(null);
    const { id } = useParams();
    const navagate = useNavigate();

    useEffect(() => {
        async function fetcCurrentTodo(){
            const responseAPI = await fetch(`${API_URL}/${id}/edit.json`);
            const json = await responseAPI.json();
            setTodo(json);
        };
        
        fetcCurrentTodo();
    }, [id]);

    async function handleSubmit(e) {
        e.preventDefault();
        const responseAPI = await fetch(`${API_URL}/${id}/update_completed.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editTodo)
        });

        if (responseAPI.ok) {
            const json = await responseAPI.json();
            navagate(`/todos/${json.id}`);
        } else {
            alert("Error updating To Do");
        }
    };

    return (
        <div>
            <h2>Edit Todo</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nameInput">Name: </label>
                    <br/>
                    <input 
                        type="text" 
                        id="nameInput" 
                        value={editTodo?.name || ""}
                        onChange={(e) => setTodo({...editTodo, name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="completedInput">Completed: </label>
                    <br/>
                    <input 
                        type="checkbox" 
                        id="completedInput" 
                        checked={editTodo?.completed || false}
                        onChange={(e) => setTodo({...editTodo, completed: e.target.checked})} />
                </div>
                <button type="submit">Update Todo</button>
            </form>
        </div>
    );
}

export default EditTodoForm;