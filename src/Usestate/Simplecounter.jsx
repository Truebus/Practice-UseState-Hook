//simple counter
import { useState } from "react"
export function Counter(){
    const[count,setCount]=useState(0);
    const increase=()=>{
        setCount (count+1)
    }
    const decrease=()=>{
        if(count>0){
        setCount(count-1)
        }
    }
    return(
        <div>
            <h3>Count:{count}</h3>
        <button type="button" onClick={increase}>Increment</button>
        <button type="button" onClick={decrease}>Decrement </button>
</div>
    )
}