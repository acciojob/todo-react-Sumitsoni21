
import React from "react";
import './../styles/App.css';

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
      <div>
        
       <h2>To-Do List</h2>
       
       <input type="text" value={task} onChange={handleChange}/>
       <button onClick={handleAddTask}>Add Todo</button>
       
       {tasks && <div>   {tasks.map((task,index) => <div>
         <p>{task}</p>
         <button onClick={()=>handleDelete(index)}>Delete</button>
       </div>)}
       
       </div>}
     
      </div>
  )
}

export default App
