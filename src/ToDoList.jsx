
import React, {useState} from "react";

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat", "Sleep", "Die"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){         //remove white space 
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index){

        const updateTasks = tasks.filter((_,i) => i!== index);
        setTasks(updateTasks);
    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]  // swap 2 elements in array
            setTasks(updatedTasks);
        }
    }
    
    function moveTaskDown(index){
        
    }

    return(
            <div className="to-do-list">
                <h1>To Do List</h1>

                <div>
                    <input 
                        type="text"
                        placeholder="Enter a task"
                        value={newTask}
                        onChange={handleInputChange} />
                    <button 
                        className="add-button"
                        onClick={addTask}>
                        Add
                    </button>
                </div>

                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="text">{task}</span>

                            <button 
                                className="delete-button" 
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>

                            <button 
                                className="move-button"
                                onClick={() => moveTaskUp}>
                                👆
                            </button>

                            <button 
                                className="move-button"
                                onClick={() => moveTaskDown}>
                                👇
                            </button>

                        </li>)}
                </ol>

            </div>
        );

}
export default ToDoList