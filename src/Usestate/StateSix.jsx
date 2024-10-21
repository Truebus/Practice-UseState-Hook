// Form (two variables)
import { useState } from "react"

export default function Form(){
    const[change,setChange]=useState("Versha");
    const[age,setAge]=useState(22);
    const Text=(e)=>{
        setChange (e.target.value)
    }
    const clicked=()=>{
        setAge(age+1);
    }
    return(
        <div>
            <input type="text" value={change} onChange={Text}></input><br></br>
            <button type="button" onClick={clicked}>Increment Age</button>
            <h3>Your Name is:-{change}, You are {age} Years Old.</h3>
        </div>
    )
}