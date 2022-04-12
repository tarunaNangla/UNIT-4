
 import React,{useState} from "react";

const Counter = ()=>
{

    const[count,setCount] = useState(0);
    
    
    const handleinc = () => {
        setCount((prevState)=>prevState+1);
    }
   
    const handledec = () => {
        setCount(count-1);
    }
   
    const handle = () => {
        setCount(count*2);
    }

    return(
<>

          <h1 style={{color: count%2==0 ? "green":"red"}} >{count}</h1>
          <button onClick={() => handleinc()}>Increment</button>
          <button onClick={() => handledec()}>Decrement</button>
          <button onClick={() => handle()}>Double</button>



</>
    )
}

export default Counter;