

import react, { useState } from "react";


const  Todo = ({tasks, handleDelete}) => {

return (
   <ul className="todoList" >
     {tasks.map((task, index) => (
       <li>
         <p>{task}</p>
         <button className="btn"  onClick={()=>handleDelete(index)}>Delete</button>
       </li>
  ))}
  </ul>)
}


export default Todo;
