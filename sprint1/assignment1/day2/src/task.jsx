import { useState } from "react";
import TaskItem from "./TodoList";


function Task ()
{

    const [query,SetQuery]=useState("");
    const [tasks,SetTasks]=useState([]);

    const handlequ = (e)=>{

        let {value}=e.target;
        SetQuery(value);
        console.log(value)
    }

    const handleAdd = () =>{
        let pyload={
            title:query
        }
       let newTasks=[...tasks,pyload];
       SetTasks(newTasks);
       console.log(newTasks)

    }
    return(
        <>
        <div>Tasks</div>

         <div>
             {
                 tasks.map((ele)=>{
                     return(
                         
                         <TaskItem title={ele.title} />
                         )
                        })
                    }
         </div>
                    <input value={query} onChange={handlequ} placeholder='add details'></input>
            
                    <button onClick={handleAdd}>Add</button>

        </>
    )
 
}


export default Task;