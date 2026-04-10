import {useState, useEffect} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { showTodoService, updateTodoService } from "../../src/services/todoService";

function EditTodoForm() {
    const [editTodo, setTodo] = useState(null);
    const { id } = useParams();
    const navagate = useNavigate();

    useEffect(() => {
        async function fetcCurrentTodo(){
            try{
                const data = await showTodoService(id);
                setTodo(data);
            } catch (error) {
                console.error("Error fetching To Do:", error);
                alert(`Error fetching To Do: ${error.message}`);
                return;
            }
        };
        fetcCurrentTodo();
    }, [id]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const data = await updateTodoService(id, editTodo);
            if (data) {
                navagate(`/todos/${data.id}`);
            } else {
                alert("Error updating To Do");
            }
        }catch (error) {
            console.error("Error updating To Do:", error);
            alert(`Error updating To Do: ${error.message}`);
            return;
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