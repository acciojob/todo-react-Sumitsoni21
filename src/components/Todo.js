

import react, { useState } from "react";

function Todo = ({tasks, handleDelete}) => {

   <ul className="todoList" >
     {tasks.map((task) => (
       <li>
         <p>{task}</p>
         <button className="btn"  onClick={()=>handleDelete(index)}>Delete</button>
       </li>
  )}
  </ul>
}

export default Todo;
