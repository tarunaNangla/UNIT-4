import { useState } from "react";


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
        <input value={query} onChange={handlequ} placeholder='add details'></input>

        <button onClick={handleAdd}>Add</button>

         <div>
             {
                 tasks.map((ele)=>{
                     return(
                         
                         <h1>{ele.title}</h1>

                     )
                 })
             }
         </div>

        </>
    )
 
}


export default Task;