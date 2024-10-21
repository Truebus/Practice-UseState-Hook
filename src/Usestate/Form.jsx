//Create a controlled form component that manages the state of multiple input fields (e.g., name and email). 
//Use the useState hook to handle changes and display the current input values below the form.
import { useState } from "react";
export const ControllesForm=()=>{
    const[name,setName]=useState('Versha');
    const[email,setMail]=useState('versha@gmail.com');
    const HandleNameChange=(e)=>{
      setName(e.target.value)
    }
    const HandleEmailChange=(e)=>{
        setMail(e.target.value)
    }

    return(
        <div>
    <input type="text" value={name} onChange={HandleNameChange} placeholder="enter your name"></input><br/>
    <input type="email" value={email} onChange={HandleEmailChange} placeholder="enter your email"></input>
    <h3>Your Name is:-{name}  and Your email is:-{email} </h3>
        </div>
    )
}