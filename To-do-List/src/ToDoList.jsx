import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    if (newTask.trim() !== ""){
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_,i)=>i!==index)
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    const updatedTasks = [...tasks]
    if(index > 0){
        [updatedTasks[index],updatedTasks[index-1]] =
        [updatedTasks[index-1],updatedTasks[index]]
        setTasks(updatedTasks)
    }
  }
  function moveTaskDown(index) {
    const updatedTasks = [...tasks]
    if(index < tasks.length-1){
        [updatedTasks[index],updatedTasks[index+1]] =
        [updatedTasks[index+1],updatedTasks[index]]
        setTasks(updatedTasks)
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter A Task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, i) => (
          <li key={i}>
            <span className="text">{task}</span>
            {/* In Onclick we are sending it as a arrow function because if we pass a callback in onClick with () then it will called automatically */}
            <button className="delete-button" onClick={() => deleteTask(i)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(i)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(i)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
