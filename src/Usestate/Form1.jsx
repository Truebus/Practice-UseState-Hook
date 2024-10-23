//Create a simple form that captures a user's name and email.
// Requirements:
// •	Use state for both the name and email inputs.
// •	Create input fields for the name and email.
// •	Display the submitted data below the form when a button is clicked.
import { useState } from "react";
export const Form1=()=>{
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[submitted,setSubmitted]=useState([]);
const handlename=(e)=>{
    setName(e.target.value)
}
const handlemail=(e)=>{
    setEmail(e.target.value)
}
const add=()=>{
    if(name.trim() && email.trim()){
        setSubmitted([...submitted,{name,email}])
        setName('');
        setEmail('')
    }
}
    return(
        <div>
            {/* //<form onSubmit={add}> */}
            <label>Enter Your Name Here:-</label>
            <input type="text" onChange={handlename} value={name}></input><br/>
            <label>Enter Your Email Here:-</label>
            <input type="email" onChange={handlemail} value={email}></input><br/>
            <button type="submit" onClick={add}>Click Me</button>
            {/* </form> */}
            {submitted.map((x,index)=>(
             <div key={index}>
                <h1>{x.name}</h1>
                <p>{x.email}</p>
             </div>
            ))}
        </div>
    )
}
