
import React from "react";
import Todo from "./Todo.js";
import './../styles/App.css';
import "./styles.css";

const App = () => {
  const [task, setTask] = useState('');
 const [tasks, setTasks] = useState([]);
 
 const handleAddTask = (e) => {
   setTasks((prevTask) => [...prevTask, task]);
   setTask("");
 }
 
 const handleChange = (e) => {
   setTask(e.target.value);
 }
 
 const handleDelete = (i) => {
   setTasks(tasks.filter((_,index) => i !== index))
 }
  
  return (
      <div className="app">
        
       <h2>To-Do List</h2>
       <div className="inpSection">
       <input type="text" value={task} onChange={handleChange}/>
       <button onClick={handleAddTask}>Add Todo</button>
    </div>
      <Todo tasks={tasks} handleDelete={handleDelete} /> 
       
       </div>}
     
      </div>
  )
}

export default App
