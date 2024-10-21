// Create a component that toggles the visibility of a message when a button is clicked.
// Requirements:
// •	Use a boolean state to track whether the message is visible.
// •	Initialize the state to false.
// •	Display a message ("Hello, World!") when the state is true and hide it when false.
// •	Create a button to toggle the visibility.
import { useState } from "react"
export const Toggle=()=>{
    const[show,setShow]=useState(false);
    const handle=()=>{
        setShow(!show)
    }
    return(
        <div>
            <button onClick={handle}>Click Me</button>
            {show?<h1>Hello World!</h1>:null}
        </div>
    )
}
