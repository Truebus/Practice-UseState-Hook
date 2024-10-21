import { useState } from "react"

export function Update(){
    const[change,setChange]=useState(0);
    const click=()=>{
        setChange(a=>a+1)
    }
    return(
        <div>
            <h4>{change}</h4>
        <button onClick={()=>{
            click();
            click();
        }}>+2</button>
        <button onClick={()=>click()}>+1</button>
        </div>
    )
}