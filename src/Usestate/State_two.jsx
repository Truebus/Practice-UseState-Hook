//Text field (string) 
import { useState } from 'react'

export function Fun(){
    const [change,setChange]=useState("hello");
    function Gallary(e){
        return(
            setChange (e.target.value)
        )
    }
    return(
        <div>
            <input value={change} onChange={Gallary}></input>
            <p>You types {change}</p>
            <button type="button" onClick={() => setChange("hello")}>Reset</button>
        </div>
    )
}