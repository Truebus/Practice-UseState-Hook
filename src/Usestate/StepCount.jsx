//Enhance the counter component to allow users to set a custom step value
// (e.g., increment or decrement by 2, 5, etc.). Use useState to manage both the counter value and the step value.
import { useState } from "react"
export const CountStep=()=>{
    const[value,setValue]=useState(0);
    const[step,setStep]=useState(3)
    const handlevalueincrement=()=>{
        setValue(value+step)
    }
    const handlevaluedecrement=()=>{
        setValue(value-step)
    }
    const handleStepChange = (e) => {
        const newStep = Number(e.target.value);
        if (!isNaN(newStep)) { // Check if the input is a valid number
            setStep(newStep);
        }
    }
    return(
        <div>
            <h1>the counter component to allow users to set a custom step value</h1>
            <input type="number" onChange={handleStepChange} value={step}/>
    <button onClick={handlevalueincrement}>Increment</button>
    <button onClick={handlevaluedecrement}>Decrement</button>
    <h3>Value:- {value}</h3>
        </div>
    )
}