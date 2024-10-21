// Create a simple counter component that displays a number. Include buttons to increment and decrement the counter value.
// Requirements:
// •	Initialize the counter state to 0.
// •	Create two buttons: "Increment" and "Decrement".
// •	Update the counter when the buttons are clicked.
import { useState } from "react"
export const Counter=()=>{
    const[value,setValue]=useState(0);
    const increment=()=>{
        setValue(value+1);
    }
    const decrement=()=>{
        setValue(value-1)
    }
    return(
        <div>
            <h1>Your Counter value id:- {value}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}